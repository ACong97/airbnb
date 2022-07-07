import styles from './styles.module.scss'

import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'
import { BiDollar } from 'react-icons/bi'
import { HiGlobeAlt } from 'react-icons/hi'

import clsx from 'clsx'
import { useState } from 'react'
import Language from '../Heading/language';




function Footer() {

    const [showChangeLanguage, setshowChangeLanguage] = useState(true);

    const handleShowHeading = () => {
        setshowChangeLanguage(!showChangeLanguage)
        document.body.style.overflow = "hidden"
    }

    return (
        <footer>
            <Language show={showChangeLanguage} />
            <div className={clsx(styles.app)}>
                <div className={styles.box}>
                    <div className={clsx(styles.container)}>
                        <div className={clsx(styles.content)}>
                            <ul className={clsx(styles.list)}>
                                {[
                                    'Hỗ trợ',
                                    'Trung tâm trợ giúp',
                                    'Thông tin an toàn',
                                    'Hỗ trợ người khuyết tật',
                                    'Các tùy chọn hủy',
                                    'Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi',
                                    'Báo cáo lo ngại của hàng xóm'
                                ].map((item, index) => {
                                    if (index == 0) {
                                        return <li key={index} className={clsx(styles.item)}>
                                            {item}
                                        </li>
                                    } else {
                                        return <li key={index} className={clsx(styles.item)}>
                                            <a href='#'>{item}</a>
                                        </li>
                                    }
                                })}
                            </ul>
                        </div>
                        <div className={clsx(styles.content)}>
                            <ul className={clsx(styles.list)}>
                                {[
                                    'Cộng đồng',
                                    'Airbnb.org: nhà ở cứu trợ',
                                    'Hỗ trợ dân tị nạn thế giới',
                                    'Chống phân biệt đối xử'
                                ].map((item, index) => {
                                    if (index == 0) {
                                        return <li key={index} className={clsx(styles.item)}>
                                            {item}
                                        </li>
                                    } else {
                                        return <li key={index} className={clsx(styles.item)}>
                                            <a href='#'>{item}</a>
                                        </li>
                                    }
                                })}
                            </ul>
                        </div>
                        <div className={clsx(styles.content)}>
                            <ul className={clsx(styles.list)}>
                                {[
                                    'Đón tiếp khách',
                                    'Thử đón tiếp khách',
                                    'AirCover: bảo vệ cho Host',
                                    'Xem tài nguyên đón tiếp khách',
                                    'Truy cập diễn đàn cộng đồng',
                                    'Đón tiếp khách có trách nhiệm'
                                ].map((item, index) => {
                                    if (index == 0) {
                                        return <li key={index} className={clsx(styles.item)}>
                                            {item}
                                        </li>
                                    } else {
                                        return <li key={index} className={clsx(styles.item)}>
                                            <a href='#'>{item}</a>
                                        </li>
                                    }
                                })}
                            </ul>
                        </div>
                        <div className={clsx(styles.content)}>
                            <ul className={clsx(styles.list)}>
                                {[
                                    'Giới thiệu',
                                    'Trang tin tức',
                                    'Tìm hiểu các tính năng mới',
                                    'Thử ngỏ từ các nhà sáng lập',
                                    'Cơ hội nghể nghiệp',
                                    'Nhà đầu tư',
                                    'Airbnb Luxe'
                                ].map((item, index) => {
                                    if (index == 0) {
                                        return <li key={index} className={clsx(styles.item)}>
                                            {item}
                                        </li>
                                    } else {
                                        return <li key={index} className={clsx(styles.item)}>
                                            <a href='#'>{item}</a>
                                        </li>
                                    }
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className={clsx(styles.footer)}>
                        <ul className={clsx(styles.footerCopyright)}>
                            <li className={clsx(styles.copyrightItem)}>
                                © 2022 Airbnb, Inc.
                            </li>
                            <span className={clsx(styles.dot)}>.</span>
                            <li className={clsx(styles.copyrightItem)}>Quyền riêng tư</li>
                            <span className={clsx(styles.dot)}>.</span>
                            <li className={clsx(styles.copyrightItem)}>Điều khoản</li>
                            <span className={clsx(styles.dot)}>.</span>
                            <li className={clsx(styles.copyrightItem)}>Sở đồ trang web</li>
                        </ul>
                        <div className={clsx(styles.footerNavbar)}>
                            <button onClick={handleShowHeading} className={clsx(styles.rightButton)}><span><HiGlobeAlt /></span>Tiếng Việt (VN)</button>
                            <button onClick={handleShowHeading} className={clsx(styles.rightButton)}><span><BiDollar /></span>USD</button>
                        </div>
                        <div className={clsx(styles.footerSocialmedia)}>
                            <div className={clsx(styles.footerSocialmediaIcon)}><ImFacebook /></div>
                            <div className={clsx(styles.footerSocialmediaIcon)}><ImTwitter /></div>
                            <div className={clsx(styles.footerSocialmediaIcon)}><ImInstagram /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}


export default Footer