import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'

import styles from './style.module.scss'
import grid from '../../../grid.module.scss'

import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

import img1 from './img/1.webp'
import img2 from './img/2.webp'
import img3 from './img/3.webp'
import img4 from './img/4.webp'

function Place(props) {

    const [height, setHeight] = useState(192)
    const imgRef = useRef()
    const rowDom = useRef()

    window.onresize = () => { setHeight(imgRef.current.offsetHeight) };

    const imgContainer = [img1, img2, img3, img4]

    const handleClickNext = (e) => {
        rowDom.current.scrollLeft += 200
        e.currentTarget.previousSibling.classList.remove(styles.disabled)
        if (rowDom.current.scrollLeft >= 500) {
            e.currentTarget.classList.add(styles.disabled)
        } else {
            e.currentTarget.classList.remove(styles.disabled)
        }
    }

    const handleClickPrev = (e) => {
        rowDom.current.scrollLeft -= 200
        e.currentTarget.nextSibling.classList.remove(styles.disabled)
        if (rowDom.current.scrollLeft <= 10) {
            e.currentTarget.classList.add(styles.disabled)
        } else {
            e.currentTarget.classList.remove(styles.disabled)
        }
    }

    return (
        <div className={clsx(styles.app)}>
            <div className={clsx(grid.grid, grid.wide)}>
                <div className={clsx(styles.container)}>
                    <h1>Cảm hứng cho chuyến đi tiếp theo của bạn</h1>
                    <button onClick={handleClickPrev} className={clsx(styles.prevBtn, styles.disabled)}><IoChevronBack /></button>
                    <button onClick={handleClickNext} className={clsx(styles.nextBtn)}><IoChevronForward /></button>
                </div>
                <div ref={rowDom} className={clsx(grid.row, styles.itemContainers)}>
                    {props.data.slice(0, 4).map((item, index) => {
                        return (<div key={index} className={clsx(grid.col, grid.l3, styles.item)}>
                            <div className={clsx(styles.content)}>
                                <img ref={imgRef} alt="" src={imgContainer[index]} />
                                <div style={{ height: height + 'px', backgroundColor: `#${Math.floor(Math.random() * 1000000)}` }} className={clsx(styles.text)}>
                                    <h2>{item.location}</h2>
                                    <p>{`Cách ${Math.floor(Math.random() * 100)} km`}</p>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Place