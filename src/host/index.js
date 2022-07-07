import styles from './styles.module.scss';
import clsx from 'clsx'

// Content1
import Content1 from '../host/component/content1'
import img11 from '../host/component/content1/media/img/1.webp'
import img111 from '../host/component/content1/media/img/11.webp'
import img22 from '../host/component/content1/media/img/2.jpg'
import img222 from '../host/component/content1/media/img/22.webp'
import img33 from '../host/component/content1/media/img/3.webp'
import img333 from '../host/component/content1/media/img/33.webp'
import img44 from '../host/component/content1/media/img/4.webp'
import img444 from '../host/component/content1/media/img/44.webp'
import img55 from '../host/component/content1/media/img/5.webp'
import img555 from '../host/component/content1/media/img/55.webp'
import img77 from '../host/component/content1/media/img/6.webp'
import img777 from '../host/component/content1/media/img/66.webp'

// Content2
import Content2 from './component/content2'

// media <VIDEO />
import Video from './component/video'
import video1 from '../host/component/video/media/video/video1.webm'
import video2 from '../host/component/video/media/video/video2.webm'
import img1 from '../host/component/video/media/img/Chelsia.webp'
import img2 from '../host/component/video/media/img/Soraya.webp'
import img3 from '../host/component/video/media/img/Mohamed.webp'
import img4 from '../host/component/video/media/img/Maria.webp'

import Banner from '../host/component/banner'
// Banner1
import imgBanner1a from '../host/component/banner/media/banner1a.webp'
import imgBanner1b from '../host/component/banner/media/banner1b.jpg'
import banner1css from '../host/component/banner/stylesBanner1.module.scss'

// Banner2
import imgBanner2a from '../host/component/banner/media/banner2a.webp'
import imgBanner2b from '../host/component/banner/media/banner2b.webp'
import imgBanner2Left from '../host/component/banner/media/banner2Left.webp'
import banner2css from '../host/component/banner/stylesBanner2.module.scss'

// Header
import Header from '../host/component/header'
import avata1 from '../host/component/header/media/avata1.webp'
import avata2 from '../host/component/header/media/avata2.webp'
import avata3 from '../host/component/header/media/avata3.webp'

// Footer
import Footer from '../host/component/footer'


function Home() {

    const content1Data = [
        {
            id: 1,
            img: img11,
            name: img111,
            text: 'Việc cho thuê căn hộ studio đã làm thay đổi cuộc sống của tôi và mang đến cho tôi những trải nghiệm và con người đáng nhớ.',
            place: 'Chủ nhà ở Milan'
        },
        {
            id: 2,
            img: img22,
            name: img222,
            text: 'Cho thuê nhà cho phép tôi trở thành một doanh nhân và vạch ra con đường dẫn đến tự do tài chính.',
            place: 'Chủ nhà ở Atlanta'
        },
        {
            id: 3,
            img: img33,
            name: img333,
            text: 'Chúng tôi có thể bảo tồn nền văn hóa của mình bằng cách tổ chức trải nghiệm làm mì Ý.',
            place: 'Chủ nhà ở Palombara Sabina'
        },
        {
            id: 4,
            img: img44,
            name: img444,
            text: 'Airbnb đã cho tôi cơ hội tạo công ăn việc làm cho chính bản thân bằng cách làm những điều tôi yêu thích - đó là chăm sóc khách thuê nhà mình.',
            place: 'Chủ nhà ở Chiang Mai'
        },
        {
            id: 5,
            img: img55,
            name: img555,
            text: 'Việc cho thuê căn lều bedouin đã cho tôi cơ hội được gặp gỡ những con người đến từ khắp nơi trên thế giới.',
            place: 'Chủ nhà ở Wadi Rum'
        },
        {
            id: 6,
            img: img77,
            name: img777,
            text: 'Tôi rất thích cho thuê ngôi nhà sinh thái của mình để mọi người có thể kết nối với thiên nhiên và những người thân yêu của họ.',
            place: 'Chủ nhà ở Paraty'
        },
    ]

    return <div className={clsx(styles.app)}>
        <Video
            logoShow={true}
            buttonMoveDownDisplay={true}
            buttonMoveDownDestination='content'
            buttonDisplay={true}
            isReverse={false}
            textButton='Thử đón tiếp khách'
            textContent='Đón tiếp khách làm nên linh hồn của Airbnb'
            textDescription=''
            textVideo={true}
            videoUrl={video1}
            imgData={[
                {
                    place: 'Chủ nhà ở Philadelphia',
                    imgUrl: img1
                },
                {
                    place: 'Chủ nhà ở Mumbai',
                    imgUrl: img2
                },
                {
                    place: 'Chủ nhà ở Johannesburg',
                    imgUrl: img3
                },
                {
                    place: 'Chủ nhà ở Mexico City',
                    imgUrl: img4
                }
            ]}
        />
        <Content1
            data={content1Data}
        />
        <Content2
            dataHouse={['Toàn bộ nhà', 'Phòng riêng', 'Phòng chung']}
            dataPlace={['Hà Nội', 'Hải Phòng', 'Hồ Chí Minh', 'Đà Nẵng', 'Nha Trang']}
        />
        <Banner
            bigImg={imgBanner1a}
            smallImg={imgBanner1b}
            text={['Bạn có thắc mắc về việc đón tiếp khách?', 'Hãy hỏi ý kiến Chủ nhà siêu cấp.']}
            textBtn='Tìm hiểu thêm'
            styles={banner1css}
        />
        <Banner
            bigImg={imgBanner2a}
            smallImg={imgBanner2b}
            imgLeft={imgBanner2Left}
            text={['Chương trình bảo vệ toàn diện.', 'Luôn được áp dụng,', 'luôn miễn phí.', 'Chỉ có trên Airbnb.']}
            textBtn='Tìm hiểu thêm'
            styles={banner2css}
        />
        <Header
            img={[avata1, avata2, avata3]}
        />
        <Video
            logoShow={false}
            isReverse={true} // Đảo ngược khi > 950px
            textButton='Bắt đầu thôi!'
            textContent='Thử đón tiếp khách trên Airbnb'
            textDescription='Hãy thử tham gia cùng chúng tôi. Chúng tôi sẽ hỗ trợ bạn hoàn thành từng bước của quy trình.'
            textVideo={false} // Chữ tren video
            videoUrl={video2}
            buttonDisplay={false} // Hiện button khi dười 950px
            textAndBackground={true}
        />
        <Footer />
    </div>
}

export default Home