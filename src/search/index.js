import { Outlet } from 'react-router-dom'

// header
import Header from './header'
import headerCss from './scss/header.module.scss'
import bigLogoSrc from '../Heading/img/logoLeft.png'
import smallLogoSrc from '../Heading/img/logoLeftMini.png'

// Icon
import { IoGlobeOutline, IoMenu, IoChevronForward, IoChevronBack, IoOptionsOutline  } from 'react-icons/io5'
import { BsPersonCircle } from 'react-icons/bs'

// API

import img1 from '../apiTEST/logoFilter/done/1.png'

// XOA

function Search() {

    const fakeDataNavbar = [
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Đường trượt tuyết thẳng tới chỗ ở'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
        {icon: img1, title: 'Thiết kế'},
        {icon: img1, title: 'Bắc cực'},
    ]

    return (
        <div>
            <Header
                styles={headerCss}
                bigLogoSrc={bigLogoSrc}
                smallLogoSrc={smallLogoSrc}
                icons={
                    {
                        globe: <IoGlobeOutline />,
                        menu: <IoMenu />,
                        person: <BsPersonCircle />,
                        next: <IoChevronForward />,
                        back: <IoChevronBack />,
                        options: <IoOptionsOutline />
                    }
                }
                navbarData={fakeDataNavbar}
            />
            <Outlet />
        </div>
    )
}

export default Search