// import styles from './styles.module.scss'
import clsx from 'clsx'
import { useState, useRef, useEffect } from 'react'

function Banner1({ bigImg, smallImg, text, textBtn, styles, imgLeft }) {

    const [img, setImg] = useState(document.body.offsetWidth > 744 ? bigImg : smallImg)
    const appDom = useRef()


    useEffect(() => {
        const handleResize = () => {
            if (appDom.current.offsetWidth + 34 <= 744) { // SCROLL bar width = 34px
                setImg(smallImg)
            } else {
                setImg(bigImg)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return (<div ref={appDom} className={styles.app}>
        <div className={styles.container}>
            <div className={styles.imgBanner}>
                <img src={img} />
            </div>
            <div className={styles.content}>
                <div className={styles.contentImg}>
                    <img src={imgLeft} />
                </div>
                {text.map((item, index) => <div key={index} className={styles.text}>{item}</div>)}
                <button className={styles.button}>{textBtn}</button>
            </div>
        </div>
    </div>)
}

export default Banner1