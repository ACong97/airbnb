import clsx from 'clsx';
import styles from './styles.module.scss';
import { IoChevronBackOutline, IoChevronForwardOutline, IoFastFood } from 'react-icons/io5'
import { useState, useRef, useEffect } from 'react'

function Content1({ data }) {

    const [idNumber, setIdNumber] = useState(0)
    const containerDom = useRef()



    const changeSelect = (nexOrPrev) => {
        const number = idNumber + nexOrPrev // Lùi hoặc tiến đoạn description
        setIdNumber(number)
    }

    const changeScrollLeft = (n) => { // Cuộn ngang
        containerDom.current.scrollLeft = containerDom.current.childNodes[2].clientWidth * n
    }

    const handlePrevClick = (index) => { // Click left
        if (index > 0) {
            changeScrollLeft(idNumber - 1)
            changeSelect(-1)
        }
    }

    const handleNextClick = (index) => { // Click right
        if (index < data.length - 1) {
            changeSelect(1)
            changeScrollLeft(idNumber + 1)
        }
    }

    window.onresize = () => { // Giữ vị trí của item
        containerDom.current.scrollLeft = containerDom.current.childNodes[2].clientWidth * idNumber
    }

    return <div id="content" className={clsx(styles.app)}>
        <div className={styles.header}>
            <div className={styles.headerText}>
                Bạn có thể đón tiếp bất kỳ ai, ở bất cứ đâu
            </div>
        </div>
        <div ref={containerDom} className={styles.container}>
            <div className={styles.content}></div>
            {data.map((item, index) => {

                let selected = true

                if (index === idNumber) {
                    selected = false
                }

                return (<div key={index} className={styles.content}>
                    <div selected={true} className={styles.image}>
                        <div style={{ backgroundImage: `url(${item.img})` }} className={styles.picture}>
                        </div>
                    </div>
                    <div className={clsx(styles.textContainer, selected || styles.animated)} style={selected ? { opacity: '0' } : {}}>
                        <div className={styles.description}>
                            {item.text}
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.name}>
                                <img src={item.name} />
                            </div>
                            <div className={styles.footerText}>
                                {item.place}
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
            <div className={styles.content}></div>
        </div>
        <div className={styles.button}>
            <div onClick={() => { handlePrevClick(idNumber) }} className={clsx(styles.prev, idNumber == 0 && styles.disabled)}>
                <IoChevronBackOutline />
            </div>
            <div onClick={() => { handleNextClick(idNumber) }} className={clsx(styles.next, idNumber == 5 && styles.disabled)}>
                <IoChevronForwardOutline />
            </div>
        </div>
    </div>
}


export default Content1;
