import clsx from 'clsx'
import { IoChevronDown, IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'
import { useRef, useState, useEffect } from 'react'

import styles from './styles.module.scss'
import houseStyles from './houseDomStyles.module.scss'
import guestStyles from './guestDomStyles.module.scss'
import placeStyles from './placeDomStyles.module.scss'

import ExtraComponent from './extraComponent'


function Content2({ dataPlace, dataHouse }) {
    const [isDropDown, setIsDropDown] = useState(false)
    const [price, setPrice] = useState(Math.floor(Math.random() * 1000))
    const [showComponent, setShowComponent] = useState(true)

    const [houseType, setHouseType] = useState('Toàn bộ nhà')
    const [guestNumber, setGuestNumber] = useState(2)
    const [place, setPlace] = useState('Hà Nội')

    const houseDom = useRef()
    const guestDom = useRef()
    const placeDom = useRef()

    const handleBtnClick = (e) => { // Btn Click
        if (document.body.offsetWidth < 724) {
            if (e.target.parentNode === houseDom.current.parentNode.childNodes[0]) {
                e.currentTarget.nextSibling.classList.toggle(houseStyles.show)
                e.currentTarget.childNodes[1].classList.add(styles.rotate)
            } else if (e.target.parentNode === guestDom.current.parentNode.childNodes[0]) {
                e.currentTarget.nextSibling.classList.toggle(guestStyles.show)
                e.currentTarget.childNodes[1].classList.add(styles.rotate)
            } else {
                e.currentTarget.nextSibling.classList.toggle(placeStyles.show)
                e.currentTarget.childNodes[1].classList.add(styles.rotate)
            }
        } else {
            if (e.target.parentNode === houseDom.current.parentNode.childNodes[0]) {
                e.currentTarget.nextSibling.classList.toggle((styles.displayBlock))
                e.currentTarget.childNodes[1].classList.add(styles.rotate)
            } else if (e.target.parentNode === guestDom.current.parentNode.childNodes[0]) {
                e.currentTarget.nextSibling.classList.toggle(styles.displayBlock)
                e.currentTarget.childNodes[1].classList.add(styles.rotate)
            } else {
                e.currentTarget.nextSibling.classList.toggle(styles.displayBlock)
                e.currentTarget.childNodes[1].classList.add(styles.rotate)
            }
        }
        setIsDropDown(true)
    }

    const handleItemClick = (e, item) => { // Item Click 
        if (e.target.parentNode === houseDom.current) {
            setHouseType(item)
        } else if (e.target.parentNode === guestDom.current) {
            setGuestNumber(item + 1)
        } else {
            setPlace(item)
        }

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
                // Đóng block
                houseDom.current.classList.remove(houseStyles.show)
                guestDom.current.classList.remove(guestStyles.show)
                placeDom.current.classList.remove(placeStyles.show)

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
                            <span className={styles.btnText}>{houseType}</span>
                            <span className={styles.btnIcon}><IoChevronDown /></span>
                        </button>
                        <div ref={houseDom} className={clsx(styles.list, houseStyles.list)}>
                            <div className={clsx(styles.listHeaderPhoneOnly, houseStyles.listHeaderPhoneOnly)}>
                                <div className={houseStyles.listHeaderIcon}><IoCloseSharp /></div>
                                <div className={houseStyles.listHeaderText}>Bạn sẽ chia sẻ loại chỗ nào?</div>
                            </div>
                            {dataHouse.map((item, index) => {
                                return <div
                                    key={index}
                                    onClick={(e) => { handleItemClick(e, item) }}
                                    className={clsx(styles.item, houseStyles.item, houseType === item ? clsx(styles.actived, houseStyles.actived) : '')}
                                >
                                    {item}
                                    <span className={clsx(styles.itemIcon, houseStyles.itemIcon)}><IoCheckmarkSharp /></span>
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
                            <span className={styles.btnText}>{`${guestNumber} khách`}</span>
                            <span className={styles.btnIcon}><IoChevronDown /></span>
                        </button>

                        <div ref={guestDom} className={clsx(guestStyles.list, styles.list)}>
                            {[...Array(16).keys()].map((item, index) => {
                                return <div key={index} onClick={(e) => { handleItemClick(e, item) }} className={clsx(styles.item, guestStyles.item, item + 1 === guestNumber ? clsx(guestStyles.actived, styles.actived) : '')}>
                                    {`${item + 1} khách`}
                                    <span className={clsx(styles.itemIcon, guestStyles.itemIcon)}><IoCheckmarkSharp /></span>
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
                            <span className={styles.btnText}>{place}</span>
                            <span className={styles.btnIcon}><IoChevronDown /></span>
                        </button>
                        <div ref={placeDom} className={clsx(placeStyles.list, styles.list)}>
                            <div className={clsx(styles.listHeaderPhoneOnly, placeStyles.listHeaderPhoneOnly)}>
                                <div className={placeStyles.listHeaderIcon}><IoCloseSharp /></div>
                                <div className={placeStyles.listHeaderText}>Bạn sẽ chia sẻ loại chỗ nào?</div>
                            </div>
                            {dataPlace.map((item, index) => {
                                return <div
                                    key={index}
                                    onClick={(e) => { handleItemClick(e, item) }}
                                    className={clsx(styles.item, placeStyles.item, item === place ? clsx(styles.actived, placeStyles.actived) : '')}
                                >
                                    {item}
                                    <span className={clsx(styles.itemIcon, placeStyles.itemIcon)}><IoCheckmarkSharp /></span>
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