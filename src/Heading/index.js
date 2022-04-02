import clsx from 'clsx';
import { useState, useRef } from 'react'

import { GlobeAltIcon, UserCircleIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid'
import grid from '../grid.module.scss'
import styles from './heading.module.scss';
import Language from './language';


function Heading() {

    const [show1, setShow] = useState(true);
    const [showUser, setShowUser] = useState(clsx(styles.userDropbox));
    const [backgroundColor, setBackgroundColor] = useState([styles.header])
    const [heightHeader, setHeighHeader] = useState([])
    const [colorChange, setColorChange] = useState([styles.midleContainer])
    const [colorChangeSticky, setColorChangeSticky] = useState(styles.midleContainerSticky)
    const userNode = useRef()



    ////////////////////////////
    // scroll down
    window.onscroll = (e) => {
        handleBackgroundColor()
        handleColorChange()
        handleBackGroundHeight()
    }

    // handle backGround color change
    const handleBackgroundColor = () => {
        if (window.pageYOffset != 0) {
            setBackgroundColor([styles.header, styles.backgroundWhite])
        } else {
            setBackgroundColor([styles.header])
        }
    }
    const handleBackGroundHeight = () => {
        if (window.pageYOffset != 0) {
            setHeighHeader([styles.h80])
        } else {
            setHeighHeader([])
        }
    }
    // handle text Color change
    const handleColorChange = () => {
        if (window.pageYOffset != 0) {
            setColorChange([styles.midleContainer, styles.colorBlack, grid.l4, grid.col, grid.m12])
            setColorChangeSticky(clsx(styles.midleContainerSticky, styles.colorBlack))
        } else {
            setColorChange([styles.midleContainer, grid.l4, grid.col, grid.m12])
            setColorChangeSticky(clsx(styles.midleContainerSticky))
        }
    }
    // end
    ////////////////////////////


    // handle
    const handleShowHeading = () => { setShow(!show1) }
    const handleShowDropbox = (e) => {
        if (!userNode.current.className.includes('active')) {
            setShowUser(clsx(styles.userDropbox, styles.active))
        } else {
            setShowUser(clsx(styles.userDropbox))
        }
    }



    return (
        <header className={clsx(...backgroundColor, ...heightHeader)}>
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


                    {/* Middle -search */}
                    {/* When on top */}
                    <div className={clsx(...colorChange)}>
                        <ul className={clsx(grid.row)}>
                            <li className={clsx(styles.midleItem, grid.l2, grid.col)}>Nơi ở</li>
                            <li className={clsx(styles.midleItem, grid.l4, grid.col)}>Trải nghiệm</li>
                            <li className={clsx(styles.midleItem, grid.l6, grid.col)}>Trải nghiệm trực tuyến</li>
                        </ul>
                    </div>
                    {/* When moving */}
                    <div className={clsx(grid.l4, grid.col, styles.hide)}>
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
            <div className={clsx(grid.wide, grid.grid, styles.searchActiveContainer)}>
                {/* Navbar sticky */}
                <div className={colorChangeSticky}>
                    <ul className={clsx(grid.row)}>
                        <li className={clsx(styles.midleItem, grid.l2, grid.col)}>Nơi ở</li>
                        <li className={clsx(styles.midleItem, grid.l4, grid.col)}>Trải nghiệm</li>
                        <li className={clsx(styles.midleItem, grid.l6, grid.col)}>Trải nghiệm trực tuyến</li>
                    </ul>
                </div>
                <div className={styles.searchActive}>
                    <div>
                        Địa điểm
                        <input placeholder='Bạn sắp đi đâu?' />
                    </div>
                    <div>
                        Nhận phòng
                        <p>Thêm ngày</p>
                    </div>
                    <div>
                        Trả phòng
                        <p>Thêm ngày</p>
                    </div>
                    <div>
                        Khách
                        <p>Thêm khách</p>
                    </div>
                    <span className={styles.searchButton}>
                        <SearchIcon />
                    </span>
                </div>
            </div>
        </header>
    )

}

export default Heading