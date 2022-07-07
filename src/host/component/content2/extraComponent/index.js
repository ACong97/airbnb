import styles from './styles.module.scss'
import clsx from 'clsx'
import { IoCloseOutline } from 'react-icons/io5'
import { useState, useEffect } from 'react'


function ExtraComponent({ show }) {

    const [show1, setShow1] = useState(show)

    useEffect(() => {
        setShow1(!show1)
    }, [show])

    const handleClickCloser = () => {
        setShow1(!show1)
        document.body.style.overflow = ""
    }

    return (<div className={clsx(styles.app, show1 || styles.hide)}>
        <div onClick={handleClickCloser} className={clsx(styles.background)}></div>
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.content)}>
                <div onClick={handleClickCloser} className={clsx(styles.icon)}><IoCloseOutline /></div>
                <div className={styles.body}>
                    <h2 className={clsx(styles.title)}>Cách chúng tôi ước tính thu nhập tiềm năng của bạn</h2>
                    <div className={clsx(styles.text)}>Chúng tôi đưa ra một vài giả định và phép tính đơn giản để xác định thu nhập của bạn:</div>
                    <ul className={clsx(styles.list)}>
                        <li className={clsx(styles.text, styles.item)}>
                            Nếu bạn cho thuê toàn bộ nhà, chúng tôi giả định rằng bạn có thể đón tiếp 4 khách. Nếu bạn đăng phòng riêng, chúng tôi tính đó là 2 khách và đối với phòng chung, chỉ có 1 khách. Bạn có thể thay đổi các lựa chọn của mình trong menu thả xuống bất kỳ lúc nào.
                        </li>
                        <li className={clsx(styles.text, styles.item)}>
                            Chúng tôi lấy mức giá theo đêm trung vị (chưa bao gồm chi phí, phí và thuế) dựa trên dữ liệu đặt phòng tại khu vực của bạn trong vòng 12 tháng qua.
                        </li>
                        <li className={clsx(styles.text, styles.item)}>
                            Sau đó, chúng tôi nhân mức giá đó với tổng số đêm có khách ở để có được ước tính thu nhập hằng tháng. Để ước tính số đêm bạn có thể đón tiếp khách, chúng tôi sẽ xem xét tần suất đón tiếp khách của những Chủ nhà khác trong khu vực của bạn.
                        </li>
                    </ul>
                    <div className={styles.text}>Xin lưu ý, đây chỉ là số ước tính. Số tiền thực nhận phụ thuộc vào một số yếu tố khác như tình trạng còn phòng, giá cả, tỷ lệ chấp nhận và tỷ lệ hủy của bạn, các quy định hạn chế theo pháp luật và nhu cầu trong khu vực của bạn.</div>
                    <div className={styles.text}>Ngoài ra, khả năng đón tiếp khách của bạn có thể phụ thuộc vào luật pháp địa phương trong khu vực của bạn. <span className={styles.emphasize}>Tìm hiểu thêm</span>.</div>
                </div>
            </div>
        </div>
    </div>)
}

export default ExtraComponent