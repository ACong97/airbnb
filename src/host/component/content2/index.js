import clsx from 'clsx'
import styles from './styles.module.scss'
import { IoChevronDown, IoCheckmarkSharp } from 'react-icons/io5'
import { useRef, useState, useEffect } from 'react'

import ExtraComponent from './extraComponent'


function Content2({ dataPlace, dataHouse }) {
    const [isDropDown, setIsDropDown] = useState(false)
    const [price, setPrice] = useState(Math.floor(Math.random() * 1000))
    const [showComponent, setShowComponent] = useState(true)

    const houseDom = useRef()
    const guestDom = useRef()
    const placeDom = useRef()

    const handleBtnClick = (e) => { // Btn Click
        e.currentTarget.nextSibling.classList.toggle(styles.displayBlock)
        e.currentTarget.childNodes[1].classList.add(styles.rotate)
        setIsDropDown(true)
    }

    const handleItemClick = (e, index) => { // Item Click 
        e.target.classList.add(styles.actived) // Add ACTIVED class
        e.target.parentNode.childNodes.forEach((node, ortherIndex) => { // Remove ACTIVED class
            if (ortherIndex != index) node.classList.remove(styles.actived)
        })
        e.target.parentNode.previousSibling.childNodes[0].textContent = e.target.textContent // Change Text
        setPrice(Math.round(Math.random() * 1000)) // New Price
    }


    useEffect(() => { // Đóng các dropbox
        const handle = (e) => {
            if (
                isDropDown &&
                (
                    !houseDom.current.contains(e.target.parentNode) ||
                    !guestDom.current.contains(e.target.parentNode) ||
                    !placeDom.current.contains(e.target.parentNode)
                )
            ) {
                console.log('hoajt ddong');
                // Đóng block
                houseDom.current.classList.remove(styles.displayBlock)
                guestDom.current.classList.remove(styles.displayBlock)
                placeDom.current.classList.remove(styles.displayBlock)

                // Lộn ngược
                placeDom.current.parentNode.childNodes[0].childNodes[1].classList.remove(styles.rotate)
                houseDom.current.parentNode.childNodes[0].childNodes[1].classList.remove(styles.rotate)
                guestDom.current.parentNode.childNodes[0].childNodes[1].classList.remove(styles.rotate)
                setIsDropDown(false)
            };
        }

        document.addEventListener('click', handle)

        return () => { document.removeEventListener('click', handle) }
    })

    const handleFooterClick = () => {
        setShowComponent(!showComponent)
        document.body.style.overflow = 'hidden'
    }


    return (
        <div className={clsx(styles.app)}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Bạn muốn cho thuê loại chỗ ở nào?
                    </div>
                    <div className={styles.box}>
                        <button onClick={handleBtnClick} className={clsx(styles.button)}>
                            <span className={styles.btnText}>Toàn bộ nhà</span>
                            <span className={styles.btnIcon}><IoChevronDown /></span>
                        </button>
                        <div ref={houseDom} className={styles.list}>
                            {dataHouse.map((item, index) => {
                                return <div key={index} onClick={(e) => { handleItemClick(e, index) }} className={clsx(styles.item)}>
                                    {item}
                                    <span className={styles.itemIcon}><IoCheckmarkSharp /></span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Bao nhiêu khách có thể ở tại đó?
                    </div>
                    <div className={styles.box}>
                        <button onClick={handleBtnClick} className={clsx(styles.button)}>
                            <span className={styles.btnText}>4 khách</span>
                            <span className={styles.btnIcon}><IoChevronDown /></span>
                        </button>

                        <div ref={guestDom} className={styles.list}>
                            {[...Array(16).keys()].map((item, index) => {
                                return <div key={index} onClick={(e) => { handleItemClick(e, index) }} className={clsx(styles.item)}>
                                    {`${item + 1} khách`}
                                    <span className={styles.itemIcon}><IoCheckmarkSharp /></span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Địa điểm ở đâu?
                    </div>
                    <div className={styles.box}>
                        <button onClick={handleBtnClick} className={clsx(styles.button)}>
                            <span className={styles.btnText}>Hà Nội</span>
                            <span className={styles.btnIcon}><IoChevronDown /></span>
                        </button>
                        <div ref={placeDom} className={styles.list}>
                            {dataPlace.map((item, index) => {
                                return <div key={index} onClick={(e) => { handleItemClick(e, index) }} className={clsx(styles.item)}>
                                    {item}
                                    <span className={styles.itemIcon}><IoCheckmarkSharp /></span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.content)}>
                    <div className={styles.total}>{`Kiếm tới $1.${price}/tháng*`}</div>
                </div>
                <div className={styles.content}>
                    <div onClick={handleFooterClick} className={styles.footer}>Cách chúng tôi ước tính thu nhập tiềm năng của bạn</div>
                </div>
            </div>
            <ExtraComponent show={showComponent} />
        </div>
    )
}

export default Content2