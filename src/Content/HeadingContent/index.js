import clsx from 'clsx'
import { useRef } from 'react'

import styles from './headingContent.module.scss';
import grid from '../../grid.module.scss';
import Image from '../HeadingContent/img/image.js'


function HeadingContent() {

    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.background)}>
            </div>
            <div className={clsx(styles.content, grid.wide, grid.grid)}>
                <div className={clsx(styles.blackBackground)}>
                </div>
                <div className={clsx(styles.banner2)}>
                    <div className={clsx(styles.background)}>
                        <Image />
                        <div className={clsx(styles.contentBanner2)}>
                            <h1>Hãy để trí tò mò của bạn dẫn lỗi</h1>
                            <a>Tìm kiếm linh hoạt</a>
                        </div>
                    </div>
                    <div className={clsx(styles.banner1)}>
                        <div className={clsx(styles.contentBanner1)}>
                            <p>Hỗ trợ người dân gặp khó khăn vì đại dịch trên khắp thế giới</p>
                            <a>Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingContent;