import styles from './styles.module.scss'
import grid from '../grid.module.scss'
import { ImFacebook } from 'react-icons/im'
import clsx from 'clsx'



function Footer() {

    // function alphabetCount(letter) {
    //     const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    //     console.log(alphabet.indexOf(letter));
    // }

    // alphabetCount('l')
    // alphabetCount('m')
    // alphabetCount('n')
    // alphabetCount('o')


    function biggerIsGreater(w) {
        const arrayIndex = [];
        const arrayIndexSort = [];
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let result;

        for (let i = 0; i < w.length; i++) {
            arrayIndex.push(alphabet.indexOf(w[i]))
            arrayIndexSort.push(alphabet.indexOf(w[i]))
        }

        arrayIndexSort.sort((a, b) => a - b)

        for(let i = 0; i < arrayIndex.length; i++) {
            if(arrayIndex[i] == arrayIndexSort[i]) {

            } 
        }

        // check 1st lettermax // thu nho array voi sort den chu dau tien => chay function

        for (let i = arrayIndex.length - 1; i > 0; i--) {
            if (arrayIndex[i] > arrayIndex[i - 1] && i - 1 != 0) {
                console.log(1);
                result = [...arrayIndex.slice(0, i - 1), ...arrayIndex.slice(i, i + 1), ...arrayIndex.slice(i - 1, i), ...arrayIndex.slice(i + 1, arrayIndex.length)]
                return result.map(item => {
                    return alphabet[item]
                }).join('')
            } else if (arrayIndex[i] > arrayIndex[i - 1] && i - 1 == 0) {
                for (let j = arrayIndex.length - 1; j >= 0; j--) {
                    if (arrayIndex[0] < arrayIndex[j]) {
                        return [...arrayIndex.splice(j, 1), ...arrayIndex.sort((a, b) => a - b)].map(item => {
                            return alphabet[item]
                        }).join('')
                    }
                }
            }
        }

        return 'no answer'
    }


    console.log(biggerIsGreater('mijamkzpiiniveik'));

    return (
        <footer>
            <div className={clsx(grid.grid, grid.wide)}>
                <div className={clsx(grid.row)}>
                    <div className={clsx(grid.l3, grid.col, grid.m12, grid.c12)}>
                        <ul className={clsx(styles.container)}>
                            <li className={clsx(styles.item)}>
                                Hỗ trợ
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Trung tâm trợ giúp</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Thông tin an toàn</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Các tùy chọn hủy</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Hỗ trợ người khuyết tật</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Báo cáo lo ngại của hàng xóm</a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(grid.l3, grid.col, grid.m12, grid.c12)}>
                        <ul className={clsx(styles.container)}>
                            <li className={clsx(styles.item)}>
                                Cộng đồng
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Airbnb.org: nhà ở cứu trợ</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Hỗ trợ dân tị nạn thế giới</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Chống phân biệt đối xử</a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(grid.l3, grid.col, grid.m12, grid.c12)}>
                        <ul className={clsx(styles.container)}>
                            <li className={clsx(styles.item)}>
                                Đón tiếp khách
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Thử đón tiếp khách</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>AirCover: bảo vệ cho Host</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Xem tài nguyên đón tiếp khách</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Truy cập diễn đàn cộng đồng</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Đón tiếp khách có trách nhiệm</a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(grid.l3, grid.col, grid.m12, grid.c12)}>
                        <ul className={clsx(styles.container)}>
                            <li className={clsx(styles.item)}>
                                Giới thiệu
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Trang tin tức</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Tìm hiểu các tính năng mới</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Thử ngỏ từ các nhà sáng lập</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Cơ hội nghể nghiệp</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Nhà đầu tư</a>
                            </li>
                            <li className={clsx(styles.item)}>
                                <a href='#'>Airbnb Luxe</a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(grid.l12, grid.m12, grid.c12, grid.col)}>
                        <div className={clsx(styles.footer)}>
                            a
                            an
                            a
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer