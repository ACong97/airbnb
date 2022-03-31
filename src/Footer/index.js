import styles from './styles.module.scss'
import grid from '../grid.module.scss'

import { IconContext } from "react-icons";
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'
import { BiCopyright, BiDollar } from 'react-icons/bi'
import { HiGlobeAlt } from 'react-icons/hi'

import clsx from 'clsx'
import { useState } from 'react'
import Language from '../Heading/language';




function Footer() {

    const [showChangeLanguage, setshowChangeLanguage] = useState(true);

    const handleShowHeading = () => { setshowChangeLanguage(!showChangeLanguage) }

    return (
        <footer>
            <Language show={showChangeLanguage} />
            <div className={clsx(grid.grid, grid.wide)}>
                <div className={clsx(grid.row)}>
                    <div className={clsx(grid.l3, grid.col, grid.m12, grid.c12)}>
                        <ul className={clsx(styles.container)}>
                            <li className={clsx(styles.item)}>
                                Hỗ trợ
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Trung tâm trợ giúp</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Thông tin an toàn</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Các tùy chọn hủy</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Hỗ trợ người khuyết tật</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Báo cáo lo ngại của hàng xóm</a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(grid.l3, grid.col, grid.m12, grid.c12)}>
                        <ul className={clsx(styles.container)}>
                            <li className={clsx(styles.item)}>
                                Cộng đồng
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Airbnb.org: nhà ở cứu trợ</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Hỗ trợ dân tị nạn thế giới</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Chống phân biệt đối xử</a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(grid.l3, grid.col, grid.m12, grid.c12)}>
                        <ul className={clsx(styles.container)}>
                            <li className={clsx(styles.item)}>
                                Đón tiếp khách
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Thử đón tiếp khách</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>AirCover: bảo vệ cho Host</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Xem tài nguyên đón tiếp khách</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Truy cập diễn đàn cộng đồng</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Đón tiếp khách có trách nhiệm</a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(grid.l3, grid.col, grid.m12, grid.c12)}>
                        <ul className={clsx(styles.container)}>
                            <li className={clsx(styles.item)}>
                                Giới thiệu
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Trang tin tức</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Tìm hiểu các tính năng mới</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Thử ngỏ từ các nhà sáng lập</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Cơ hội nghể nghiệp</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Nhà đầu tư</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Airbnb Luxe</a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(grid.l12, grid.m12, grid.c12, grid.col)}>
                        <div className={clsx(styles.footer)}>
                            <ul className={clsx(styles.footerCopyright)}>
                                <li className={clsx(styles.copyrightItem)}>
                                    <IconContext.Provider value={{ size: '16px' }}>
                                        <span>
                                            <BiCopyright />
                                        </span>
                                    </IconContext.Provider>
                                    2022 Airbnb, Inc.
                                </li>
                                <span className={clsx(styles.dot)}>.</span>
                                <li className={clsx(styles.copyrightItem)}>Quyền riêng tư</li>
                                <span className={clsx(styles.dot)}>.</span>
                                <li className={clsx(styles.copyrightItem)}>Điều khoản</li>
                                <span className={clsx(styles.dot)}>.</span>
                                <li className={clsx(styles.copyrightItem)}>Sở đồ trang web</li>
                            </ul>
                            <div className={clsx(styles.footerNavbar)}>
                                <button onClick={handleShowHeading} className={clsx(grid.col, styles.rightButton, styles.cursorPointer)}><HiGlobeAlt /><span>Tiếng Việt (VN)</span></button>
                                <button onClick={handleShowHeading} className={clsx(grid.col, styles.rightButton, styles.cursorPointer)}><BiDollar /><span>USD</span></button>
                            </div>
                            <div className={clsx(styles.footerSocialmedia)}>
                                <div className={clsx(styles.footerSocialmediaIcon)}><ImFacebook /></div>
                                <div className={clsx(styles.footerSocialmediaIcon)}><ImTwitter /></div>
                                <div className={clsx(styles.footerSocialmediaIcon)}><ImInstagram /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer