import clsx from 'clsx';
import { useState, useRef } from 'react'

import { GlobeAltIcon, UserCircleIcon, MenuIcon, SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import grid from '../grid.module.scss'
import styles from './heading.module.scss';
import Language from './language';


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
    const [topSearch, setTopSearch] = useState([])
    const [movingSearch, setMovingSearch] = useState([styles.hide])

    // Search active
    const [input, setInput] = useState('')

    const userNode = useRef()



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
        if (window.pageYOffset != 0) {
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
        if (window.pageYOffset != 0) {
            setTopSearch([styles.hide])
            setMovingSearch([])
        } else {
            setTopSearch([])
            setMovingSearch([styles.hide])
        }
    }
    // handle text Color change
    const handleColorChange = () => {
        if (window.pageYOffset != 0) {
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
    const handleClickActive = (e) => {
        if (e.target == e.currentTarget) console.log(1)
    }

    // 2. Search box
    const handleInputChange = (e) => {
        console.dir(e.target.value == '');
    }




    // End
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
                <div className={styles.searchActive}>
                    <div className={clsx(styles.searchActiveContent, styles.actived)} onClick={handleClickActive}>
                        Địa điểm
                        <br />
                        <input onChange={handleInputChange} placeholder='Bạn sắp đi đâu?' />
                        <div className={clsx(styles.searchActiveSearchPlace)}>

                            {/* default search active */}
                            <div className={clsx(styles.searchActiveDefault)}>
                                <p className={clsx(styles.placeText)}>Mọi lúc, mọi nơi</p>
                                <button className={clsx(styles.placeButton)}>
                                    <div className={clsx(styles.placeButtonText)}>Tìm kiếm linh hoạt</div>
                                    <div className={clsx(styles.placeButtonIcon)}><ChevronRightIcon /></div>
                                </button>
                            </div>
                            {/* end */}

                            {/* GoogleMap box here */}
                            <div>

                            </div>


                        </div>
                    </div>
                    <div className={clsx(styles.searchActiveContent)} onClick={handleClickActive}>
                        Nhận phòng
                        <p className={clsx(styles.searchActiveText)}>Thêm ngày</p>
                    </div>
                    <div className={clsx(styles.searchActiveContent)} onClick={handleClickActive}>
                        Trả phòng
                        <p className={clsx(styles.searchActiveText)}>Thêm ngày</p>
                    </div>
                    <div className={clsx(styles.searchActiveContent)} onClick={handleClickActive}>
                        Khách
                        <p className={clsx(styles.searchActiveText)}>Thêm khách</p>
                    </div>
                    <div className={styles.hide}>
                        Ngày
                        <p className={clsx(styles.searchActiveText)}>Thời điểm bạn muốn tham gia</p>
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