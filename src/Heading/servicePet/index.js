import styles from './styles.module.scss'
import img from './img/pet-service.jpg'
import clsx from 'clsx'
import { IoCloseOutline } from 'react-icons/io5'
import { useState, useEffect } from 'react'


function ServicePet( {showService} ) {

    const [show1 ,setShow1] = useState(showService)

    useEffect(() => {
        setShow1(!show1)
    }, [showService])

    const handleClickCloser = () => {
        setShow1(!show1)
        document.body.style.overflow = ""
    }

    return (<div className={clsx(styles.container, show1 || styles.hide)}>
        <div onClick={handleClickCloser} className={clsx(styles.background)}></div>
        <div className={clsx(styles.content)}>
            <div onClick={handleClickCloser} className={clsx(styles.icon)}><IoCloseOutline /></div>
            <div className={clsx(styles.picture)}><img src={img} /></div>
            <h2 className={clsx(styles.title)}>Động vật phục vụ</h2>
            <div className={clsx(styles.text)}>Động vật phục vụ không phải thú cưng nên bạn không cần thêm vào dây.</div>
            <div className={clsx(styles.text)}>Bạn sẽ đi cùng động vật hỗ trợ cảm xúc? Hãy tìm hiểu <span className={clsx(styles.emphasize)}>chính sách hỗ trợ người có nhu cầu đặc biệt của chúng tôi.</span></div>
        </div>
    </div>)
}

export default ServicePet