import styles from './styles.module.scss'
import grid from '../../grid.module.scss'
import clsx from 'clsx'

import img1 from './img/1.jpg'
import Button from '../../Btn'




function FooterContent() {



    return <div className={clsx(grid.grid)}>
        <div className={clsx(styles.container)}>
            <div className={clsx(grid.grid, grid.wide, styles.img)}>
                <img src={img1} />
                <div className={clsx(grid.grid, grid.wide, styles.content)}>
                    <p>Bạn có thắc mắc về việc đón tiếp khách?</p>
                    <Button content='Hỏi ý kiến Chủ nhà siêu cấp' />
                </div>
            </div>
        </div>
    </div>
}

export default FooterContent