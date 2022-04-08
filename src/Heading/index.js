import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react'

import { GlobeAltIcon, UserCircleIcon, MenuIcon, SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import grid from '../grid.module.scss'
import styles from './heading.module.scss';
import Language from './language';
import { IoLocationOutline } from 'react-icons/io5'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import * as languages from 'react-date-range/dist/locale'

function Heading() {

    const [show1, setShow] = useState(true);
    const [showUser, setShowUser] = useState(clsx(styles.userDropbox));

    // header COLOR change
    const [backgroundColor, setBackgroundColor] = useState([styles.header])
    // const [heightHeader, setHeighHeader] = useState([])
    const [colorHeader, setColorHeader] = useState([])
    const [colorChange, setColorChange] = useState([styles.midleContainer])
    const [colorChangeSticky, setColorChangeSticky] = useState([styles.midleContainerSticky])

    // hide and show search box when moving scroll
    const [topSearch, setTopSearch] = useState([]) // set display khi PageYOffset == 0
    const [movingSearch, setMovingSearch] = useState([styles.hide]) // set display khi pageYOffset != 0

    // Search active
    // 1. search
    const [searchActived, setSearchActived] = useState([])
    const [searchDisplay, setSearchDisplay] = useState([styles.hide])
    const [inputSearch, setInputSearch] = useState('') // Lấy input
    const [inputSearchData, setInputSearchData] = useState([]) // Dữ liệu dùng để render
    const [searchBoxHide, setSearchBoxHide] = useState([styles.hide]) // Search box active
    const [searchBoxDefault, setSearchBoxDefault] = useState([]) // Search box default
    const [backgroundColorF7, setBackgroundColorF7] = useState([]) // Add background #f7f7f7 when something active
    const locationsApi = 'https://airbnb-clone-sever.herokuapp.com/api/locations'
    const userNode = useRef()
    // 2. date
    const [dayStartActived, setDayStartActived] = useState([])
    const [dayEndActived, setDayEndActived] = useState([])
    const [dateDropboxDisplay, setDateDropboxDisplay] = useState([styles.hide]) // dropbox display
    const [dayFlexibleSelected, setDayFlexibleSelected] = useState([])
    const [calenderSelected, setCalenderSelected] = useState([])

    const [state, setState] = useState([
        {
            a: 'Thêm ngày',
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]); // Calender

    // 3. guest
    const [guestDisplay, setGuestDisplay] = useState([])
    const [guestActived, setGuestActived] = useState([])

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

    //////////////////////////////////////////////////////////////////
    // scroll down
    window.onscroll = () => {
        handleBackgroundColor()
        handleColorChange()
        // handleBackGroundHeight()
        handleBackgroundMoving()
    }

    // handle backGround change
    const handleBackgroundColor = () => {
        if (window.pageYOffset !== 0) {
            setBackgroundColor([styles.header, styles.backgroundWhite])
        } else {
            setBackgroundColor([styles.header])
        }
    }
    // const handleBackGroundHeight = () => {
    //     if (window.pageYOffset != 0) {
    //         setHeighHeader([styles.h80])
    //     } else {
    //         setHeighHeader([])
    //     }
    // }
    const handleBackgroundMoving = () => {
        if (window.pageYOffset !== 0) {
            setTopSearch([styles.hide])
            setMovingSearch([])
        } else {
            setTopSearch([])
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
    //////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////
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
    //////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////
    // Display and show Active box item
    // 1. place
    const handleClickSearchActiveBox = (e) => {
        if (e.target === e.currentTarget || e.target.nodeName.toLowerCase() === 'input') {
            setBackgroundColorF7([styles.backgroundF7])
            setSearchActived([styles.actived])
            setSearchDisplay([])
            ///////////////////
            setDateDropboxDisplay([styles.hide])
            setGuestDisplay([styles.hide])
            setDayStartActived([])
            setDayEndActived([])
            setGuestActived([])
        }
    }


    // 2. date
    // 2.1. date start
    const handleClickDateStart = (e) => {
        if (e.target === e.currentTarget || e.target.nodeName.toLowerCase() === 'p') {
            setBackgroundColorF7([styles.backgroundF7])
            setDayStartActived([styles.actived])
            setDateDropboxDisplay([])
            ///////////////////
            setSearchDisplay([styles.hide])
            setGuestDisplay([styles.hide])
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
            setDateDropboxDisplay([])
            ///////////////////
            setSearchDisplay([styles.hide])
            setGuestDisplay([styles.hide])
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
            setGuestDisplay([])
            ///////////////////
            setSearchDisplay([styles.hide])
            setDateDropboxDisplay([styles.hide])
            setDayStartActived([])
            setSearchActived([])
            setDayEndActived([])
        }
    }

    // end
    //////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////
    // Swap between calender and flexible day
    const handleClickCalenderAndFlexibleDay = () => {

    }


    // end
    //////////////////////////////////////////////////////////////////

    // handle show language Box
    const handleShowHeading = () => { setShow(!show1) }
    const handleShowDropbox = (e) => {
        if (!userNode.current.className.includes('active')) {
            setShowUser(clsx(styles.userDropbox, styles.active))
        } else {
            setShowUser(clsx(styles.userDropbox))
        }
    }

    return (
        <header className={clsx(...backgroundColor, ...colorHeader)}>
            <Language show={show1} />
            <div className={clsx(grid.wide, grid.grid)}>
                <div className={clsx(grid.row, grid.aliCenter, grid.jSpaceBetween)}>
                    {/* Left */}
                    <div className={clsx(styles.headerLeft, grid.l4, grid.col)}>
                        <img
                            alt='1'
                            className={clsx(styles.logoPc, styles.leftLogo)}
                            src={require('./img/logoLeft.png')}
                        />
                        <img
                            alt='1'
                            className={clsx(styles.logoMobile, styles.leftLogo)}
                            src={require('./img/logoLeftMini.png')}
                        />
                    </div>


                    {/* Middle - search */}
                    {/* When on top */}
                    <div className={clsx(...colorChange, grid.l4, grid.col, grid.m12, ...topSearch)}>
                        <ul className={clsx(grid.row)}>
                            <li className={clsx(styles.midleItem, styles.active, grid.l2, grid.col)}>Nơi ở</li>
                            <li className={clsx(styles.midleItem, grid.l4, grid.col)}>Trải nghiệm</li>
                            <li className={clsx(styles.midleItem, grid.l6, grid.col)}>Trải nghiệm trực tuyến</li>
                        </ul>
                    </div>
                    {/* When moving */}
                    <div onClick={() => {
                        setTopSearch([])
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
                            <p className={clsx(grid.col, styles.rightBecomeHost)}>Trở thành chủ nhà</p>
                            <button onClick={handleShowHeading} className={clsx(grid.col, styles.rightButton, styles.cursorPointer)}><GlobeAltIcon className={styles.icon20} /></button>
                            <div className={clsx(grid.col, styles.positionRelative)}>
                                {/* Navbar của dropbox */}
                                <div
                                    tabIndex="-1"
                                    onBlur={() => {
                                        setTimeout(() => handleShowDropbox(), 150)
                                    }}
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
                                        <p className={clsx(styles.signIn)}>Đăng ký</p>
                                        <p className={clsx(styles.login)}>Đăng nhập</p>
                                    </div>
                                    {/* Footer */}
                                    <div>
                                        <p>Cho thuê nhà</p>
                                        <p>Tổ chức trải nhiệm</p>
                                        <p>Trợ giúp</p>
                                    </div>
                                </div>
                                {/* End dropBox */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className={clsx(grid.wide, grid.grid, styles.searchActiveContainer, ...topSearch)}>
                {/* Navbar sticky */}
                <div className={clsx(...colorChangeSticky)}>
                    <ul className={clsx(grid.row)}>
                        <li className={clsx(styles.midleItem, grid.l2, grid.col)}>Nơi ở</li>
                        <li className={clsx(styles.midleItem, grid.l4, grid.col)}>Trải nghiệm</li>
                        <li className={clsx(styles.midleItem, grid.l6, grid.col)}>Trải nghiệm trực tuyến</li>
                    </ul>
                </div>
                <div className={clsx(styles.searchActive, ...backgroundColorF7)}>
                    {/* search place */}
                    <div onClick={handleClickSearchActiveBox} className={clsx(styles.searchActiveContent, ...searchActived)}>
                        Địa điểm
                        <br />
                        <input onChange={handleInputChange} placeholder='Bạn sắp đi đâu?' />
                        <div className={clsx(styles.searchActiveSearchPlace, ...searchDisplay)}>

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
                    {/* date */}
                    <div className={clsx(styles.searchActiveMidleContainer)}>
                        {/* date start */}
                        <div onClick={handleClickDateStart} className={clsx(styles.searchActiveMidleContent, ...dayStartActived)}>
                            Nhận phòng
                            <p className={clsx(styles.searchActiveText)}>{state[0].a || state[0].startDate.getDate() + ' ' + 'thg' + ' ' + (state[0].startDate.getMonth() + 1)}</p></div>
                        {/* date end */}
                        <div onClick={handleClickDateEnd} className={clsx(styles.searchActiveMidleContent, ...dayEndActived)}>
                            Trả phòng
                            <p className={clsx(styles.searchActiveText)}>{state[0].a || state[0].endDate.getDate() + ' ' + 'thg' + ' ' + (state[0].endDate.getMonth() + 1)}</p>
                        </div>
                        {/* date when click ngày linh hoạt */}

                        {/* date when click navbar trải nhiệm */}

                        {/* dropbox */}
                        <div className={clsx(styles.searchActiveMidleDropbox, ...dateDropboxDisplay)}>
                            <div className={styles.searchActiveMidleDropboxText}>
                                <div>
                                    <p className={clsx(...calenderSelected)}>Lịch</p>
                                    <p className={clsx(styles.pLast, ...dayFlexibleSelected)}>Ngày linh hoạt</p>
                                </div>
                            </div>
                            {/* calender */}
                            <div className={styles.calender}>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => {
                                        item.selection['a'] = false
                                        setState([item.selection])
                                    }}
                                    onShownDateChange={a => {
                                        console.log(a);
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
                        </div>
                    </div>
                    <div onClick={handleClickCustomer} className={clsx(styles.searchActiveContent, ...guestActived)}>
                        Khách
                        <p className={clsx(styles.searchActiveText)}>Thêm khách</p>
                    </div>
                    <span className={clsx(styles.searchButton, styles.searchActiveButton)}>
                        <SearchIcon />
                    </span>
                </div>
            </div>
        </header>
    )

}

export default Heading