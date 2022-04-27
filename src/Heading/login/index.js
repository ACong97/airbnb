import styles from './style.module.scss'
import clsx from 'clsx'
import { IoCloseOutline, IoLogoFacebook, IoLogoApple, IoMailOutline } from 'react-icons/io5'
import { FcGoogle, FcCellPhone } from 'react-icons/fc'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'


function Login() {

    const [activeClass, setActiveClass] = useState(true) // set styles active phoneNumber and Email
    const [emailDisplay, setEmailDisplay] = useState(false) // set display cho email section
    const [phoneDisplay, setPhoneDisplay] = useState(true) // set display cho email section
    const [firstNumber, setFirstNumber] = useState(`+84`) // set first number

    const handleToggleClassActive = (e) => {
        if (!(e.target.id === 'phoneNumber' && e.target.value !== "")) {
            setActiveClass(!activeClass) // Phone Number hiện outline
        }
    }

    const handleSelectForcus = (e) => {
        e.target.parentNode.classList.toggle(styles.actived) // Selecter Focused hiện outline
    }
    const handleSelectChange = (e) => {
        setFirstNumber(e.target.value.slice(e.target.value.length - 4, e.target.value.length - 1))
    }

    const handleClickEmail = (e) => {
        setEmailDisplay(!emailDisplay)
        setPhoneDisplay(!phoneDisplay)
    }

    const handleClickPhone = (e) => {
        setPhoneDisplay(!phoneDisplay)
        setEmailDisplay(!emailDisplay)
    }


    //SUBMIT
    const inputPhoneNumber = useRef()
    const inputEmail = useRef()

    const handleSubmit = (e) => { // handle Submit and show Error
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };
        e.preventDefault()

        if (validateEmail(inputEmail.current.value)) {
            console.log(inputEmail.current.value);
        } else {
            console.dir(inputEmail.current);
        }
    }


    // API
    const countriesApi = 'https://airbnb-clone-sever.herokuapp.com/api/countries';
    const [dataCountries, setDataCountries] = useState([])

    useEffect(() => {
        fetch(countriesApi)
            .then(function (responsive) {
                return responsive.json()
            })
            .then(data => {
                setDataCountries(data)
            })
            .catch(err => (console.error(err)))
    }, [])

    const handleClickCloseForm = () => { // Hiện thanh scroll
        document.body.style.overflow = ""
    }

    // overflow body hidden
    document.body.style.overflow = 'hidden'

    return <div className={clsx(styles.app)}>
        <Link onClick={handleClickCloseForm} to="/" className={clsx(styles.background)}>
        </Link>
        <div className={clsx(styles.container)}>
            {/* header */}
            <header className={clsx(styles.header)}>
                <div className={styles.headerIcon}>
                    <Link onClick={handleClickCloseForm} to="/">
                        <IoCloseOutline />
                    </Link>
                </div>
                <p className={styles.title}>Đăng nhập hoặc đăng ký</p>
            </header>


            {/* content */}
            <div className={styles.content}>
                {/* header */}
                <div className={styles.contentHeader}>
                    <h3>Chào mừng bạn đến với Airbnb</h3>
                </div>
                {/* form */}
                <div className={styles.contentBody}>
                    <form>
                        {/* Phone */}
                        <div className={clsx(styles.phoneNumberSection, phoneDisplay || styles.hide)}>
                            {/* Quốc gia */}
                            <label htmlFor="country" className={clsx(styles.country)}>
                                <div className={styles.countryTitle}>Quốc gia/Khu vực</div>
                                <select onChange={handleSelectChange} onFocus={handleSelectForcus} onBlur={handleSelectForcus} className={styles.countryText} id="country">
                                    <option>Việt Nam (+84)</option>
                                    <option>Hoa Kỳ (+1)</option>
                                    {dataCountries.map((item, index) => {
                                        return <option key={index}>{`${item.name} (+${item.number})`}</option>
                                    })}
                                </select>
                            </label>

                            {/* Number phone */}
                            <label htmlFor="phoneNumber" className={clsx(styles.phoneNumber, activeClass || styles.actived)}>
                                <div className={clsx(styles.inputSection)}>
                                    <div className={clsx(activeClass || styles.actived, styles.firstNumber)}>{firstNumber}</div>
                                    <input
                                        ref={inputPhoneNumber}
                                        onBlur={handleToggleClassActive}
                                        onFocus={handleToggleClassActive}
                                        id="phoneNumber" className={clsx(styles.phoneNumberText, activeClass || styles.actived)}
                                        placeholder="(XXX) XXX-XXXX"
                                        type="tel"
                                    />
                                </div>
                                <div className={clsx(activeClass || styles.actived, styles.phoneNumberTitle)}>Số điện thoại</div>
                            </label>
                        </div>
                        <div className={clsx(styles.phoneNumberFooter, phoneDisplay || styles.hide)}>Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại. Có áp dụng phí dữ liệu và phí tin nhắn tiêu chuẩn. <span className={styles.emphasize}>Chính sách về quyền riêng tư</span></div>
                        {/* Email */}
                        <div className={clsx(styles.emailSection, emailDisplay || styles.hide)}>
                            <label htmlFor="email" className={clsx(styles.phoneNumber, activeClass || styles.actived)}>
                                {/* ĐÂY LÀ Input khi được Forcus nó actived header và hiện ra // header đc position , thằng dưới không được mà cố định tại điểm đó luôn */}
                                <div className={clsx(styles.inputSection)}>
                                    <input
                                        ref={inputEmail}
                                        onBlur={handleToggleClassActive}
                                        onFocus={handleToggleClassActive}
                                        id="email" className={clsx(styles.emailText)}
                                        placeholder="Email"
                                        type="email"
                                    />
                                </div>
                                <div className={clsx(activeClass || styles.actived, styles.phoneNumberTitle)}>Email</div>
                            </label>
                        </div>
                        <div className={clsx(styles.errorMessage)}>Cần điền số điện thoại</div>
                        {/* Submit btn */}
                        <button onClick={handleSubmit} className={clsx(styles.submit)}>Tiếp tục</button>
                    </form>
                </div>
                <div className={clsx(styles.midleLine)}>
                    <div className={clsx(styles.midleLineText)}>hoặc</div>
                </div>
                <div className={clsx(styles.footerContainer)}>
                    <div className={clsx(styles.footerLink)}>
                        <div style={{ color: '#1976f1' }} className={clsx(styles.footerIcon)}><IoLogoFacebook /></div>
                        <div className={clsx(styles.footerText)}>Tiếp tục với Facebook</div>
                    </div>
                    <div className={clsx(styles.footerLink)}>
                        <div className={clsx(styles.footerIcon)}><FcGoogle /></div>
                        <div className={clsx(styles.footerText)}>Tiếp tục với Google</div>
                    </div>
                    <div className={clsx(styles.footerLink)}>
                        <div className={clsx(styles.footerIcon)}><IoLogoApple /></div>
                        <div className={clsx(styles.footerText)}>Tiếp tục với Apple</div>
                    </div>
                    <label htmlFor="phoneNumber" onClick={handleClickPhone} className={clsx(styles.footerLink, emailDisplay || styles.hide)}>
                        <div className={clsx(styles.footerIcon)}><FcCellPhone /></div>
                        <div className={clsx(styles.footerText)}>Tiếp tục với điện thoại</div>
                    </label>
                    <label htmlFor="email" onClick={handleClickEmail} className={clsx(styles.footerLink, phoneDisplay || styles.hide)}>
                        <div className={clsx(styles.footerIcon)}><IoMailOutline /></div>
                        <div className={clsx(styles.footerText)}>Tiếp tục với email</div>
                    </label>
                </div>
            </div>


        </div>
    </div>
}

export default Login