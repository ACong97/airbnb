import clsx from 'clsx'
import { useRef, useState } from 'react'

import styles from './style.module.scss'
import grid from '../../../grid.module.scss'

import img1 from './img/1.webp'
import img2 from './img/2.webp'
import img3 from './img/3.webp'
import img4 from './img/4.webp'

function Place() {

    const [height, setHeight] = useState(192)
    const imgRef = useRef()

    window.onresize = () => { setHeight(imgRef.current.offsetHeight) };

    return (
        <div className={clsx(styles.app)}>
            <div className={clsx(grid.grid, grid.wide)}>
                <h1>Cảm hứng cho chuyến đi tiếp theo của bạn</h1>
                <div className={clsx(grid.row)}>
                    <div className={clsx(grid.col, grid.l3, grid.m12, grid.c12)}>
                        <div className={clsx(styles.content)}>
                            <img ref={imgRef} alt="" src={img1} />
                            <div style={{ height: height + 'px' }} className={clsx(styles.text)}>
                                <h2>Thành phố Hồ Chí Minh</h2>
                                <p>Cách 9km</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(grid.col, grid.l3, grid.m12, grid.c12)}>
                        <div className={clsx(styles.content)}>
                            <img alt="" src={img2} />
                            <div style={{ height: height + 'px' }} className={clsx(styles.text)}>
                                <h2>Thành phố Hồ Chí Minh</h2>
                                <p>Cách 9km</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(grid.col, grid.l3, grid.m12, grid.c12)}>
                        <div className={clsx(styles.content)}>
                            <img alt="" src={img3} />
                            <div style={{ height: height + 'px' }} className={clsx(styles.text)}>
                                <h2>Thành phố Hồ Chí Minh</h2>
                                <p>Cách 9km</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(grid.col, grid.l3, grid.m12, grid.c12)}>
                        <div className={clsx(styles.content)}>
                                <img alt="" src={img4} />
                            <div style={{ height: height + 'px' }} className={clsx(styles.text)}>
                                <h2>Thành phố Hồ Chí Minh</h2>
                                <p>Cách 9km</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place