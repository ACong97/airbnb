import styles from './style.module.scss'
import clsx from 'clsx'
import grid from '../../../grid.module.scss'

import Button from '../../../Btn'
import img1 from './img/1.webp'
import img2 from './img/2.webp'

function Experience() {

    return (
        <div className={clsx(styles.app)}>
            <div className={clsx(grid.grid, grid.wide)}>
                <h1 className={clsx(styles.heading)}>Khám phá Trải nghiệm Airbnb</h1>
                <div className={clsx(grid.row)}>
                    <div className={clsx(grid.col, grid.l6, grid.m12, grid.c12)}>
                        <div className={clsx(styles.container)}>
                            <div className={clsx(styles.img)}>
                                <img src={img1} />
                            </div>
                            <div className={clsx(styles.content)}>
                                <div className={clsx(styles.text)}>
                                    <h1>Những điều nên trải nghiệm trong chuyến đi của bạn</h1>
                                    <Button content='Trải nhiệm'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(grid.col, grid.l6, grid.m12, grid.c12)}>
                        <div className={clsx(styles.container)}>
                            <div className={clsx(styles.img)}>
                                <img src={img2} />
                            </div>
                            <div className={clsx(styles.content)}>
                                <div className={clsx(styles.text)}>
                                    <h1>Những điều nên trải nghiệm tại nhà</h1>
                                    <Button content='Trải nhiệm trực tuyến' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience