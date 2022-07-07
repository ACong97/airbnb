import clsx from 'clsx';
import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { GlobeAltIcon, UserCircleIcon, MenuIcon, SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import grid from '../grid.module.scss'
import styles from './heading.module.scss';
import Language from './language';
import ServicePet from './servicePet';
// import Login from './login'
import { IoLocationOutline } from 'react-icons/io5'
import { BsCalendar, BsCalendarCheck, BsChevronRight, BsChevronLeft } from 'react-icons/bs'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import * as languages from 'react-date-range/dist/locale'

function Heading() {
    // const [isNotActived, setIsNotActived] = useState(false);

    const [show1, setShow] = useState(true);
    const [showUser, setShowUser] = useState(clsx(styles.userDropbox));

    // header COLOR change
    const [backgroundColor, setBackgroundColor] = useState([styles.header])
    // const [heightHeader, setHeighHeader] = useState([])
    const [colorHeader, setColorHeader] = useState([])
    const [colorChange, setColorChange] = useState([styles.midleContainer])
    const [colorChangeSticky, setColorChangeSticky] = useState([styles.midleContainerSticky])

    // hide and show search box when moving scroll
    const [topSearch, setTopSearch] = useState(true) // set display khi PageYOffset == 0
    const [movingSearch, setMovingSearch] = useState([styles.hide]) // set display khi pageYOffset != 0

    // Search active
    // 1. search
    const [searchActived, setSearchActived] = useState([]) // set active hoặc trạng thái thường nút Địa điểm
    // const [searchDisplay, setSearchDisplay] = useState([styles.hide]) // ẩn hiện dropbox của Địa điểm
    const [inputSearch, setInputSearch] = useState('') // Lấy input
    const [inputSearchData, setInputSearchData] = useState([]) // Dữ liệu dùng để render
    const [searchBoxHide, setSearchBoxHide] = useState([styles.hide]) // Search box active
    const [searchBoxDefault, setSearchBoxDefault] = useState([]) // Search box default
    const [backgroundColorF7, setBackgroundColorF7] = useState([]) // Add background #f7f7f7 when something active
    const locationsApi = 'https://airbnb-clone-sever.herokuapp.com/api/locations'
    const userNode = useRef()
    // 2. date
    const [dayStartDisplay, setDayStartDisplay] = useState([]) // ẩn hiện daystart
    const [dayEndDisplay, setDayEndDisplay] = useState([]) // Ẩn hiện dayend
    const [dayStartActived, setDayStartActived] = useState([]) // Ngày bắt đầu đến active khi Click
    const [dayEndActived, setDayEndActived] = useState([]) // Ngày cuối cùng active khi Click
    // const [dateDropboxDisplay, setDateDropboxDisplay] = useState([styles.hide]) // dropbox display
    const [dayFlexibleSelected, setDayFlexibleSelected] = useState([]) // Ngày linh hoạt và Lịch khi được chuyển
    const [calendarSelected, setCalendarSelected] = useState([styles.selected]) // Lịch chọn ngày
    const [flexibleDayDisplay, setFlexibleDayDisplay] = useState([styles.hide]) // Ẩn hiện flexible ( ngày linh hoạt )
    const [flexibleDayActived, setFlexibleDayActived] = useState([]) // Ẩn hiện active flexible ( ngày linh hoạt )
    const [calendarDisplay, setCalendarDisplay] = useState([styles.hide]) // Ẩn hiện dropbox lịch
    const [flexibleDayDropboxDisplay, setFlexibleDayDropboxDisplay] = useState([styles.hide]) // Hiện phần chọn ngày linh hoạt trong midle active
    const [dayMidleLeftActived, setDayMidleLeftActived] = useState([])

    const [state, setState] = useState([
        {
            a: 'Thêm ngày',
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]); // Thông tin của Calender chọn ngày du lịch

    const [state1, setState1] = useState([
        {
            a: 'Thêm thời điểm bạn muốn tham gia',
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]); // Thông tin của Calender chọn ngày trải nhiệm

    // 3. guest
    const [guestDropBoxDisplay, setGuestDropBoxDisplay] = useState([])
    const [guestActived, setGuestActived] = useState([])
    const [numberGuest, setNumberGuest] = useState([0, 0, 0, 0])

    // const handlePlusClick = (e, item) => { // Tăng số lượng khách và hiển thị
    //     e.target.previousSibling.innerHTML =  e.target.previousSibling.innerHTML*1 + 1
    //     item.number++;
    // }
    // const handleDecreaseClick = (e, item) => { // Giảm số lượng khách và hiển thị
    //     e.target.nextSibling.innerHTML =  e.target.nextSibling.innerHTML*1 - 1
    //     item.number--;
    // }

    // get API locations when type
    useEffect(() => {
        fetch(locationsApi)
            .then(function (responsive) {
                return responsive.json()
            })
            .then(data => {
                setInputSearchData(data)
            })
            .catch(err => (console.error(err)))
    }, [])

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // scroll down
    useEffect(() => {
        const handle = () => {
            if (!headerActiveDom.current.classList.contains(styles.hide)) {
                handleBackgroundColor()
                handleColorChange()
                // handleBackGroundHeight()
                handleBackgroundMoving()
            }

            if (window.pageYOffset === 0) {
                handleBackgroundMoving()
                handleColorChange()
                setBackgroundColor([styles.header])
            }
        }

        window.addEventListener('scroll', handle)

        return () => {
            window.removeEventListener('scroll', handle)
        }
    })

    // handle background change
    const handleBackgroundColor = () => {
        if (window.pageYOffset !== 0) {
            setBackgroundColor([styles.header, styles.backgroundWhite])
        } else {
            setBackgroundColor([styles.header])
        }
    }

    // handle display small search when scroll
    const handleBackgroundMoving = () => {
        if (window.pageYOffset !== 0) {
            setTopSearch(false)
            setMovingSearch([])
        } else {
            setTopSearch(true)
            setMovingSearch([styles.hide])
        }
    }
    // handle text Color change
    const handleColorChange = () => {
        if (window.pageYOffset !== 0) {
            setColorChange([styles.midleContainer, styles.colorBlack])
            setColorChangeSticky([styles.midleContainerSticky, styles.colorBlack])
            setColorHeader([styles.colorBlack])
        } else {
            setColorChange([styles.midleContainer])
            setColorChangeSticky([styles.midleContainerSticky])
            setColorHeader([])
        }
    }
    // end
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Search box handle when chose place and date
    // 1. Active box
    // 2. Search box
    const handleInputChange = (e) => {
        setInputSearch(e.target.value)
        if (
            e.target.value === '' || inputSearchData.filter(data => {
                return data.location.includes(inputSearch)
            }).length === 0
        ) {
            addHideSearchBox(styles.hide, '')
        } else {
            addHideSearchBox('', styles.hide)
        }
    }
    // 3. Hide and show searchbox
    const addHideSearchBox = (a, b) => {
        setSearchBoxHide([a])
        setSearchBoxDefault([b])
    }
    // End
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Display and show Active box item
    // 1. place
    const handleClickSearchActiveBox = (e) => {
        if (e.target === e.currentTarget || e.target.nodeName.toLowerCase() === 'input') {
            setBackgroundColorF7([styles.backgroundF7])
            setSearchActived([styles.actived])
            // setSearchDisplay([])
            ///////////////////
            // setDateDropboxDisplay([styles.hide])
            setFlexibleDayActived([])
            setDayStartActived([])
            setDayEndActived([])
            setDayMidleLeftActived([])
            setGuestActived([])
        }
    }


    // 2. date
    // 2.1. date start
    const handleClickDateStart = (e) => {
        if (e.target === e.currentTarget || e.target.nodeName.toLowerCase() === 'p') {
            setBackgroundColorF7([styles.backgroundF7])
            setDayStartActived([styles.actived])
            setCalendarDisplay([])
            ///////////////////
            setFlexibleDayActived([])
            setSearchActived([])
            setDayEndActived([])
            setGuestActived([])
        }
    }

    // 2.2. date end
    const handleClickDateEnd = (e) => {
        if (e.target === e.currentTarget || e.target.nodeName.toLowerCase() === 'p') {
            setBackgroundColorF7([styles.backgroundF7])
            setDayEndActived([styles.actived])
            setCalendarDisplay([])
            ///////////////////
            setFlexibleDayActived([])
            setDayStartActived([])
            setSearchActived([])
            setGuestActived([])
        }
    }

    // 2.3 Flexible date
    const handleClickFlexibleDate = (e) => {
        if (e.target === e.currentTarget || e.target.nodeName.toLowerCase() === 'p') {
            setBackgroundColorF7([styles.backgroundF7])
            setFlexibleDayActived([styles.actived])
            setFlexibleDayDisplay([])
            ///////////////////
            setDayEndActived([])
            setCalendarDisplay([styles.hide])
            setDayStartActived([])
            setSearchActived([])
            setGuestActived([])
        }
    }

    // 2.4 Flexible date
    const handleClickMidleLeftDate = (e) => {
        if (e.target === e.currentTarget || e.target.nodeName.toLowerCase() === 'p') {
            setBackgroundColorF7([styles.backgroundF7])
            setDayMidleLeftActived([styles.actived])
            ///////////////////
            setFlexibleDayActived([])
            setCalendarDisplay([styles.hide])
            setDayEndActived([])
            setDayStartActived([])
            setSearchActived([])
            setGuestActived([])
        }
    }

    // 3. number customer
    const handleClickCustomer = (e) => {
        if (e.target === e.currentTarget || e.target.nodeName.toLowerCase() === 'p') {
            setBackgroundColorF7([styles.backgroundF7])
            setGuestActived([styles.actived])
            ///////////////////
            // setSearchDisplay([styles.hide])
            // setDateDropboxDisplay([styles.hide])
            setFlexibleDayActived([])
            setDayStartActived([])
            setSearchActived([])
            setDayEndActived([])
        }
    }


    // end
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Swap between calendar and flexible day
    const handleClickCalendarAndFlexibleDay = (e) => {
        if (e.target.innerText === 'Lịch') {
            setDayStartDisplay([])
            setDayEndDisplay([])
            setCalendarDisplay([])
            setFlexibleDayDisplay([styles.hide])
            setFlexibleDayDropboxDisplay([styles.hide])
            setDayFlexibleSelected([])
            setCalendarSelected([styles.selected])
            setDayStartActived([styles.actived])
        }
        if (e.target.innerText === 'Ngày linh hoạt') {
            setDayStartDisplay([styles.hide])
            setDayEndDisplay([styles.hide])
            setCalendarDisplay([styles.hide])
            setFlexibleDayDisplay([])
            setFlexibleDayDropboxDisplay([])
            setDayFlexibleSelected([styles.selected])
            setFlexibleDayActived([styles.actived])
            setDayEndActived([])
            setCalendarSelected([])
        }
    }

    // lấy data 12 tháng
    const get12months = () => {
        const result = [];
        const today = new Date();
        let month, year;

        for (let i = 1; i < 13; i++) {
            month = today.getMonth() + i;
            year = `20${today.getYear() - 100}`;

            if (today.getMonth() + i > 12) {
                year = `20${today.getYear() - 99}`;
                month = today.getMonth() + i - 12;
            }

            result.push({
                month,
                year
            })
        }
        return result;
    }

    // flexible
    const [range, setRange] = useState('Cuối tuần') // chọn khoảng thời gian nào
    const [typeMonth, setTypeMonth] = useState([]) // chọn tháng nào

    // Click next and prev list month to chose
    const monthContainerDom = useRef()
    const handleClickNext = (e) => {
        e.currentTarget.previousSibling.classList.remove(styles.hide)
        monthContainerDom.current.scrollLeft += 254
        if (monthContainerDom.current.scrollLeft > 641) e.currentTarget.classList.add(styles.hide)
    }

    const handleClickPrev = (e) => {
        e.currentTarget.nextSibling.classList.remove(styles.hide)
        monthContainerDom.current.scrollLeft -= 254
        if (monthContainerDom.current.scrollLeft === 0) e.currentTarget.classList.add(styles.hide)
    }


    // end
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Xử lý Navbar Nơi ở và Trải nhiệm
    const [midleTakeLeftDisplay, setMidleTakeLeftDisplay] = useState([styles.hide])
    const [active, setActive] = useState(false) // Hiện và xóa animation của navbar

    const handleClickNavbarPlace = () => {
        setMidleTakeLeftDisplay([styles.hide])
        setDayStartDisplay([])
        setDayEndDisplay([])
        setFlexibleDayDisplay([styles.hide])
        setGuestDropBoxDisplay([])
        setActive(true)
        setFlexibleDayActived([])
        setDayStartActived([])
        setSearchActived([])
        setDayEndActived([])
        setGuestActived([])
    }

    const handleClickNavbarExperience = () => {
        setMidleTakeLeftDisplay([])
        setDayStartDisplay([styles.hide])
        setDayEndDisplay([styles.hide])
        setFlexibleDayDisplay([styles.hide])
        setGuestDropBoxDisplay([styles.hide])
        setActive(false)
        setFlexibleDayActived([])
        setDayStartActived([])
        setSearchActived([])
        setDayEndActived([])
        setDayMidleLeftActived([])
        setGuestActived([])
    }
    // end
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Đóng các tab khi OnMouseUp bên ngoài header
    const headerDom = useRef()
    const headerActiveDom = useRef() // search active dom
    const midleActiveDom = useRef() // navbar dom

    const closeAllApp = () => {
        setGuestActived([])
        setFlexibleDayActived([])
        setDayStartActived([])
        setSearchActived([])
        setDayEndActived([])
        setDayMidleLeftActived([])
        setBackgroundColorF7([])
        setTopSearch(true)
        setMovingSearch([styles.hide])
    }

    useLayoutEffect(() => {
        let handle = (e) => {
            if (!headerDom.current.contains(e.target) && !headerActiveDom.current.contains(e.target) && !userNode.current.contains(e.target) && !midleActiveDom.current.contains(e.target)) {
                setShowUser(clsx(styles.userDropbox)) // Đóng login

                if (window.pageYOffset !== 0) {
                    setTopSearch(false)
                    setMovingSearch([])
                } else {
                    closeAllApp()
                }
            }
        }

        document.addEventListener("click", handle)


        return () => { document.removeEventListener("click", handle) }
    }, [])
    // end
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // handle show language Box
    const handleShowHeading = () => {
        setShow(!show1)
        document.body.style.overflow = "hidden" // Đóng scroll của body
    }

    // handle show user dropbox
    const handleShowDropbox = () => {
        if (!userNode.current.className.includes('active')) {
            setShowUser(clsx(styles.userDropbox, styles.active))
        } else {
            setShowUser(clsx(styles.userDropbox))
        }
    }

    // handle show pet service box
    const [show2, setShow2] = useState(true)

    const handleShowServicePet = (item) => {
        if (item === 'Thú cưng') {
            setShow2(!show2)
            document.body.style.overflow = "hidden"
        }
    }

    return (
        <header ref={headerDom} className={clsx(...backgroundColor, ...colorHeader)}>
            <Language show={show1} />
            <ServicePet showService={show2} />
            <div className={clsx(grid.wide, grid.grid)}>
                <div className={clsx(grid.row, grid.aliCenter, grid.jSpaceBetween)}>
                    {/* Left */}
                    <div className={clsx(styles.headerLeft, grid.l4, grid.col)}>
                        <img
                            alt='1'
                            style={{ transform: 'scale(1.5)', transformOrigin: 'left' }}
                            className={clsx(styles.logoPc, styles.leftLogo)}
                            src={require('./img/logoLeft.png')}
                        />
                        <img
                            alt='1'
                            className={clsx(styles.logoMobile, styles.leftLogo)}
                            src={require('./img/logoLeftMini.png')}
                            style={{ transform: 'scale(1.5)', transformOrigin: 'left' }}
                        />
                    </div>


                    {/* Middle - search */}
                    {/* When on top */}
                    <div ref={midleActiveDom} className={clsx(...colorChange, grid.l4, grid.col, grid.m12, topSearch || styles.hide)}>
                        <ul className={clsx(grid.row)}>
                            <li onClick={handleClickNavbarPlace} className={clsx(styles.midleItem, !active || styles.actived, grid.l2, grid.col)}>Nơi ở</li>
                            <li onClick={handleClickNavbarExperience} className={clsx(styles.midleItem, grid.l4, grid.col, !!active || styles.actived)}>Trải nghiệm</li>
                            <li className={clsx(styles.midleItem, grid.l6, grid.col)}>Trải nghiệm trực tuyến</li>
                        </ul>
                    </div>
                    {/* When moving */}
                    <div onClick={() => {
                        setTopSearch(true)
                        setMovingSearch([styles.hide])
                    }} className={clsx(grid.l4, grid.m6, grid.col, ...movingSearch)}>
                        <div className={clsx(styles.midleContainer1)}>
                            <div>
                                Bắt đầu tìm kiếm
                            </div>
                            <div className={clsx(styles.searchButton, styles.midleContainerIcon)}>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className={clsx(grid.l4, grid.col)}>
                        <div className={clsx(grid.row, grid.aliCenter, grid.jEnd, grid.nogutters, styles.rightContainer)}>
                            <p className={clsx(grid.col, styles.rightBecomeHost, topSearch || styles.backgroundF7hover)}><Link to="/host">Trở thành chủ nhà</Link></p>
                            <button onClick={handleShowHeading} className={clsx(grid.col, styles.rightButton, styles.cursorPointer, topSearch || styles.backgroundF7hover)}><GlobeAltIcon className={styles.icon20} /></button>
                            <div className={clsx(grid.col, styles.positionRelative)}>
                                {/* Navbar của dropbox */}
                                <div
                                    onClick={handleShowDropbox}
                                    className={clsx(styles.userLoggin, styles.cursorPointer)}
                                >
                                    <MenuIcon className={clsx(styles.icon20)} />
                                    <UserCircleIcon className={clsx(styles.icon30)} />
                                </div>
                                {/* DropBox */}
                                <div
                                    ref={userNode}
                                    className={showUser}
                                >
                                    {/* Loggin */}
                                    <div className={clsx(styles.userDropBoxTop)}>
                                        <Link to="/login" className={clsx(styles.userText, styles.signIn)}>Đăng ký</Link>
                                        <Link to="/login" className={clsx(styles.userText, styles.login)}>Đăng nhập</Link>
                                    </div>
                                    {/* Footer */}
                                    <div>
                                        <p className={clsx(styles.userText)}>Cho thuê nhà</p>
                                        <p className={clsx(styles.userText)}>Tổ chức trải nhiệm</p>
                                        <p className={clsx(styles.userText)}>Trợ giúp</p>
                                    </div>
                                </div>
                                {/* End dropBox */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div ref={headerActiveDom} className={clsx(grid.wide, grid.grid, styles.searchActiveContainer, topSearch || styles.hide)}>
                {/* Navbar sticky */}
                <div className={clsx(...colorChangeSticky)}>
                    <ul className={clsx(grid.row)}>
                        <li onClick={handleClickNavbarPlace} className={clsx(styles.midleItem, grid.l2, grid.col, !active || styles.actived)}>Nơi ở</li>
                        <li onClick={handleClickNavbarExperience} className={clsx(styles.midleItem, grid.l4, grid.col, active || styles.actived)}>Trải nghiệm</li>
                        <li className={clsx(styles.midleItem, grid.l6, grid.col)}>Trải nghiệm trực tuyến</li>
                    </ul>
                </div>
                {/* SEARCH ACTIVE */}
                <div className={clsx(styles.searchActive, ...backgroundColorF7)}>
                    {/* search place */}
                    <div onClick={handleClickSearchActiveBox} className={clsx(styles.searchActiveContent, ...searchActived)}>
                        Địa điểm
                        <br />
                        <input onChange={handleInputChange} placeholder='Bạn sắp đi đâu?' />
                        <div className={clsx(styles.searchActiveSearchPlace)}>
                            {/* default search active */}
                            <div className={clsx(styles.searchPlaceDefault, ...searchBoxDefault)}>
                                <p className={clsx(styles.placeText)}>Mọi lúc, mọi nơi</p>
                                <button className={clsx(styles.placeButton)}>
                                    <div className={clsx(styles.placeButtonText)}>Tìm kiếm linh hoạt</div>
                                    <div className={clsx(styles.placeButtonIcon)}><ChevronRightIcon /></div>
                                </button>
                            </div>
                            {/* end */}

                            {/* GoogleMap box here */}
                            <div className={clsx(styles.searchPlaceActive, ...searchBoxHide)}>
                                {inputSearchData.filter(data => {
                                    return data.location.includes(inputSearch)
                                }).map((item, index) => {
                                    return (
                                        <div key={index} className={clsx(styles.placeActiveContainer)}>
                                            <div className={clsx(styles.locationIcon)}><IoLocationOutline /></div>
                                            <div className={clsx(styles.locationText)}>{item.location}</div>
                                        </div>
                                    )
                                }).slice(0, 5)}
                            </div>
                        </div>
                    </div>
                    {/* date ( MIDLE ) */}
                    <div className={clsx(styles.searchActiveMidleContainer)}>
                        {/* date start */}
                        <div onClick={handleClickDateStart} className={clsx(styles.searchActiveMidleContent, ...dayStartDisplay, ...dayStartActived)}>
                            Nhận phòng
                            <p className={clsx(styles.searchActiveText, !(state[0].a !== 'Thêm ngày') || styles.colorblack)}>{state[0].a || state[0].startDate.getDate() + ' thg ' + (state[0].startDate.getMonth() + 1)}</p></div>
                        {/* date end */}
                        <div onClick={handleClickDateEnd} className={clsx(styles.searchActiveMidleContent, ...dayEndDisplay, ...dayEndActived)}>
                            Trả phòng
                            <p className={clsx(styles.searchActiveText, !(state[0].a !== 'Thêm ngày') || styles.colorblack)}>{state[0].a || state[0].endDate.getDate() + ' thg ' + (state[0].endDate.getMonth() + 1)}</p>
                        </div>
                        {/* navbar thay đổi khi chọn flexible */}
                        <div onClick={handleClickFlexibleDate} className={clsx(styles.searchActiveMidleContent, ...flexibleDayDisplay, ...flexibleDayActived)}>
                            Ngày linh hoạt
                            <p className={clsx(styles.searchActiveMidleText)}>{`${range} vào ${typeMonth.length === 1 ? `Tháng ${typeMonth}` : typeMonth.map((item) => {
                                return `Thg ${item}`
                            })}`}</p>  {/* Xử lý hiện tháng đã chọn */}
                        </div>
                        {/* date when click navbar trải nhiệm */}
                        <div onClick={handleClickMidleLeftDate} className={clsx(styles.searchActiveMidleTakeLeft, ...midleTakeLeftDisplay, ...dayMidleLeftActived)}>
                            Ngày
                            <p className={clsx(styles.searchActiveMidleTakeLeftText)}>Thêm thời điểm bạn muốn tham gia</p>
                            {/* Calender MidleLeft contain */}
                            <div className={clsx(styles.calendarMidleLeft)}>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => {
                                        item.selection['a'] = false
                                        setState1([item.selection])
                                    }}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state1}
                                    minDate={new Date()}
                                    months={2}
                                    direction="horizontal"
                                    weekStartsOn={1}
                                    rangeColors={['black']}
                                    locale={languages['vi']}
                                    showMonthAndYearPickers={false}
                                    showSelectionPreview={false}
                                    showDateDisplay={false}
                                />
                            </div>
                        </div>
                        {/* dropbox midle ( CALENDAR and FLEXIBLE DATE) */}
                        <div className={clsx(styles.searchActiveMidleDropbox)}>
                            <div className={styles.searchActiveMidleDropboxText}>
                                <div>
                                    <button onClick={handleClickCalendarAndFlexibleDay} className={clsx(...calendarSelected)}>Lịch</button>
                                    <button onClick={handleClickCalendarAndFlexibleDay} className={clsx(styles.pLast, ...dayFlexibleSelected)}>Ngày linh hoạt</button>
                                </div>
                            </div>
                            {/* calendar */}
                            <div className={clsx(styles.calendar, ...calendarDisplay)}>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => {
                                        item.selection['a'] = false
                                        setState([item.selection])
                                    }}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state}
                                    minDate={new Date()}
                                    months={2}
                                    direction="horizontal"
                                    weekStartsOn={1}
                                    rangeColors={['black']}
                                    locale={languages['vi']}
                                    showMonthAndYearPickers={false}
                                    showSelectionPreview={false}
                                    showDateDisplay={false}
                                />
                            </div>
                            {/* Ngày linh hoạt */}
                            <div className={clsx(styles.flexibleDay, ...flexibleDayDropboxDisplay)}>
                                <h2 className={clsx(styles.flexibleDayText)}>Bạn muốn ở trong bao lâu?</h2>
                                <div className={clsx(styles.flexibleRangeDayContainer)}>
                                    {['Cuối tuần', '1 tuần', '1 tháng'].map((item, index) => {
                                        return <button
                                            onClick={() => setRange(item)}
                                            className={item === range ? clsx(styles.flexibleRangeDay, styles.active) : clsx(styles.flexibleRangeDay)}
                                            key={index}
                                        >
                                            {item}
                                        </button>
                                    })}
                                </div>
                                <h2 className={clsx(styles.flexibleDayText)} >Bạn muốn đi khi nào?</h2>
                                <div ref={monthContainerDom} className={clsx(styles.flexibleMonthChosenContainer)}>
                                    <button onClick={handleClickPrev} className={clsx(styles.previous, styles.hide)}><BsChevronLeft /></button>
                                    <button onClick={handleClickNext} className={clsx(styles.next)}><BsChevronRight /></button>
                                    {get12months().map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                onClick={(e) => {
                                                    e.currentTarget.classList.toggle(styles.active)
                                                    if (!typeMonth.includes(item.month)) {
                                                        setTypeMonth([...typeMonth, item.month])
                                                    } else {
                                                        setTypeMonth([...typeMonth].filter(month => month !== item.month))
                                                    }
                                                }}
                                                className={clsx(styles.flexibleMonthChosenContent)}
                                            >
                                                <div className={clsx(styles.flexibleIcon)}>
                                                    {!typeMonth.includes(item.month) ? <BsCalendar /> : <BsCalendarCheck />}
                                                </div>
                                                <div className={styles.month}>{`Tháng ${item.month}`}</div>
                                                <div className={styles.year}>{item.year}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* phần chọn số lượng khách hàng */}
                    <div onClick={handleClickCustomer} className={clsx(styles.searchActiveContent, ...guestActived, ...guestDropBoxDisplay)}>
                        Khách
                        <p className={clsx(styles.searchActiveText, !numberGuest.reduce((item, curr) => { return item += curr }, 0) || styles.colorblack)}>
                            {/* Hiển thị số lượng khách chọn 3 vòng Thú -> trẻ em -> khách */}
                            {/* {numberGuest[0] > 0 ? (((numberGuest[2]) ? `${numberGuest[0] + numberGuest[1]} khách, ${numberGuest[2]} em bé` : `${numberGuest[0] + numberGuest[1]} khách`)) : `Thêm khách`} */}
                            {numberGuest[0] > 0 ? (((numberGuest[2]) ? ((numberGuest[2] && numberGuest[3]) ? (`${numberGuest[0] + numberGuest[1]} khách, ${numberGuest[2]} em bé, ${numberGuest[3]} thú cưng`) : (`${numberGuest[0] + numberGuest[1]} khách, ${numberGuest[2]} em bé`)) : ((numberGuest[3] ? `${numberGuest[0] + numberGuest[1]} khách, ${numberGuest[3]} thú cưng` : false) || `${numberGuest[0] + numberGuest[1]} khách`))) : `Thêm khách`}
                        </p>
                        {/* number people and pet */}
                        <div className={clsx(styles.searchActiveNumberPeople)}>
                            {/* Render 4 kiểu khách */}
                            {
                                [{ title: 'Người lớn', des: 'từ 13 tuổi trở lên' },
                                { title: 'Trẻ em', des: 'Độ tuổi 2 - 12' },
                                { title: 'Em bé', des: 'Dưới 2 tuổi' },
                                { title: 'Thú cưng', des: 'Bạn sẽ mang theo động vật phục vụ?' }].map((item, index) => {
                                    return (
                                        <div key={index} className={clsx(styles.numberPeopleContainer)}>
                                            <div className={clsx(styles.numberPeopleTextContainer)}>
                                                <h3 className={clsx(styles.numberPeopleTitle)}>{item.title}</h3>
                                                <p onClick={() => { handleShowServicePet(item.title) }} className={item.title === 'Thú cưng' ? clsx(styles.numberPeopleText, styles.emphasize) : clsx(styles.numberPeopleText)}>{item.des}</p>
                                            </div>
                                            <div className={clsx(styles.numberPeopleGoing)}>
                                                <div onClick={(e) => {
                                                    if (!e.target.className.includes(styles.disabled)) {
                                                        if (numberGuest[index] !== 0)
                                                            numberGuest[index]--;
                                                        setNumberGuest([...numberGuest])
                                                    }
                                                }} className={clsx(styles.decrease, numberGuest[index] === 0 ? styles.disabled : '', (index === 0) && (numberGuest.reduce((item, curr) => { return item += curr }, 0) > 1 && numberGuest[0] === 1) ? styles.disabled : '')}>-</div>
                                                <div className={clsx(styles.number)}>{numberGuest[index]}</div>
                                                <div onClick={(e) => {
                                                    numberGuest[index]++;
                                                    if (numberGuest[0] === 0) numberGuest[0]++;
                                                    setNumberGuest([...numberGuest])
                                                }} className={clsx(styles.plus)}>+</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className={clsx(styles.numberPeopleFooter)}>Nếu bạn may mắn có nhiều hơn 2 thú cưng đi cùng, hãy nhớ cho Chủ nhà biết.</div>
                        </div>
                    </div>

                    {/* Nút search */}
                    <span className={clsx(styles.searchButton, styles.searchActiveButton)}>
                        <SearchIcon />
                    </span>
                </div>
            </div>
            <Outlet />
        </header >
    )

}

export default Heading