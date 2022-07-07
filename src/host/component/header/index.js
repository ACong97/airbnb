import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { SiAirbnb } from 'react-icons/si'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'


function Header({ img }) {

    const appDom = useRef()

    useEffect(() => {
        const handle = (e) => {
            if (document.body.clientWidth >= 744 - 20) { // 20px là scrollbar
                const screen100vh = window.innerHeight
                const footerDomHeight = document.body.childNodes[3].childNodes[0].childNodes[7].clientHeight
                if (window.pageYOffset > document.body.clientHeight - footerDomHeight - screen100vh - 60) { // Gắn header vào trên phần video cuối
                    return appDom.current.childNodes[0].classList.add(styles.stay)
                }
    
                if (window.pageYOffset > screen100vh - 100) { // Hiện header
                    appDom.current.childNodes[0].classList.remove(styles.stay)
                    appDom.current.classList.add(styles.show)
                } else { // Xóa header
                    appDom.current.childNodes[0].classList.remove(styles.stay)
                    appDom.current.classList.remove(styles.show)
                }
            } else {
                appDom.current.classList.add(styles.show)
                appDom.current.childNodes[0].classList.remove(styles.stay)
            }
        }

        document.addEventListener('scroll', handle)

        return () => { document.removeEventListener('scroll', handle) }
    })

    return (<div ref={appDom} className={clsx(styles.app)}>
        <div className={styles.container}>
            <Link to='/' className={styles.logo}>
                <SiAirbnb />
            </Link>
            <div className={styles.content}>
                <div className={styles.navlink}>
                    <div className={styles.avataList}>
                        {img.map((item, index) => {
                            return <div className={styles.avata} key={index}>
                                <img src={item} />
                            </div>
                        })}
                    </div>
                    <div className={styles.navlinkText}>
                        Hỏi ý kiến Chủ nhà siêu cấp
                    </div>
                </div>
                <div className={styles.becomeHost}>
                    Thử đón tiếp khách
                </div>
            </div>
        </div>
    </div>)
}

export default Header