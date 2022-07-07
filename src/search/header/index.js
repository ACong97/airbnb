import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Header({ styles, bigLogoSrc, smallLogoSrc, icons, navbarData }) {

    const [logoSrc, setLogoSrc] = useState()
    const [selectedIndex, setSelectedIndex] = useState()

    useEffect(() => {

        const handle = () => {
            if (document.body.offsetWidth < 744) {
                setLogoSrc(smallLogoSrc)
            } else {
                setLogoSrc(bigLogoSrc)
            }
        }

        if (logoSrc === undefined) {
            handle()
        }

        window.addEventListener('resize', handle)
    }, [])

    const handleNavbarLinkClick = (index) => {
        setSelectedIndex(index)
        console.log(index);
    }

    return (<header className={styles.app}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logoSrc} />
            </div>
            <div className={styles.rightContent}>
                <div className={styles.becomeHost}>Trở thành chủ nhà</div>
                <div className={styles.globe}>{icons.globe}</div>
                <div className={styles.user}>
                    <div className={styles.userContent}>
                        <div className={styles.userContentItem}>
                            {icons.menu}
                        </div>
                        <div className={styles.userContentItem}>
                            {icons.person}
                        </div>
                    </div>
                    <div className={styles.dropBox}>
                        <div className={styles.dropBoxSignin}>Đăng ký</div>
                        <div className={styles.dropBoxLogin}>Đăng nhập</div>
                        <div className={styles.dropBoxFooter}>
                            <div className={styles.dropBoxFooterContent}>Cho thuê nhà</div>
                            <div className={styles.dropBoxFooterContent}>Tổ chức trải nhiệm</div>
                            <div className={styles.dropBoxFooterContent}>Trợ giúp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.navbar}>
            <div className={styles.rightBtnContainer}>
                <div className={styles.nextBtn}>
                    {icons.next}
                </div>
                <div className={styles.filterBtn}>
                    {icons.options}
                    <div>Bộ lọc</div>
                </div>
            </div>
            <div className={styles.leftBtnContainer}>
                <div className={styles.prevBtn}>
                    {icons.back}
                </div>
            </div>
            <div className={styles.navbarList}>
                {navbarData.map((item, index) => {
                    return <Link
                        onClick={() => { handleNavbarLinkClick(index) }}
                        className={clsx(styles.navbarLink, index == selectedIndex && styles.actived)}
                        // to={`/search/${index}`}
                        to={'/search'}
                        key={index}
                    >
                        <div className={styles.navbarImg}>
                            <img src={item.icon} />
                        </div>
                        <div className={styles.navbarText}>
                            {item.title}
                        </div>
                    </Link>
                })}
            </div>
            <div className={styles.navbarFilter}>
                {/* filter here */}
            </div>
        </div>
    </header>)
}


export default Header