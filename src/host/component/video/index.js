import styles from './styles.module.scss';
import clsx from 'clsx'

import { IoChevronDown, IoPlay, IoPause } from 'react-icons/io5'
import { SiAirbnb } from 'react-icons/si'
import { Link } from 'react-router-dom'

import { useState, useRef } from 'react'



function Video({ 
    buttonMoveDownDisplay,
    buttonDisplay, 
    textDescription, 
    isReverse, 
    textButton, 
    textContent, 
    videoUrl, 
    imgData, 
    textVideo,
    textAndBackground,
    logoShow,
    buttonMoveDownDestination
}) {

    const [isVideoPlay, setIsVideoPlay] = useState(true)
    const videoDom = useRef()


    // VIDEO handle
    const handleClickStartStop = () => {
        if (isVideoPlay === true) {
            setIsVideoPlay(false)
            videoDom.current.pause()
        } else {
            setIsVideoPlay(true)
            videoDom.current.play()
        }
    }

    const handleVideoEnd = (e) => { // Xử lý khi video dừng
        setIsVideoPlay(false)
        if (textVideo) {e.target.nextSibling.childNodes[0].childNodes[0].src = imgData[0].imgUrl
        e.target.nextSibling.childNodes[1].innerText = `${imgData[0].place}`}
    }

    const handleTimeUpdate = (e) => { // UPDATE text when video play
        if(textVideo) {
            if (videoDom.current.currentTime > 5.15) {
                e.target.nextSibling.childNodes[0].childNodes[0].src = imgData[3].imgUrl
                e.target.nextSibling.childNodes[1].innerText = `${imgData[3].place}`
            } else if (videoDom.current.currentTime > 3.5) {
                e.target.nextSibling.childNodes[0].childNodes[0].src = imgData[2].imgUrl
                e.target.nextSibling.childNodes[1].innerText = `${imgData[2].place}`
            } else if (videoDom.current.currentTime > 1.9) {
                e.target.nextSibling.childNodes[0].childNodes[0].src = imgData[1].imgUrl
                e.target.nextSibling.childNodes[1].innerText = `${imgData[1].place}`
            } else if (videoDom.current.currentTime > 0) {
                e.target.nextSibling.childNodes[0].childNodes[0].src = imgData[0].imgUrl
                e.target.nextSibling.childNodes[1].innerText = `${imgData[0].place}`
            }
        } 
    }

    return <div className={clsx(styles.app, isReverse ? styles.reverse : '')}>
        <div className={clsx(styles.contentContainer)}>
            {logoShow ? <Link to="/" className={clsx(styles.logo)}>
                <SiAirbnb />
            </Link> : ''}
            <div className={clsx(styles.textContainer, textAndBackground && styles.backgroundColorBack)}>
                <div className={clsx(styles.text)}>{textContent}</div>
                <div className={clsx(styles.description)}>{textDescription}</div>
                <button className={clsx(styles.mainBtn, buttonDisplay || styles.block)}>{textButton}</button>
            </div>
            <div className={clsx(styles.footer, buttonMoveDownDisplay || styles.hide)}>
                <a href={`#${buttonMoveDownDestination}`} className={clsx(styles.footerBtn)}><IoChevronDown /></a>
            </div>
        </div>
        <div className={clsx(styles.videoContainer)}>
            <video
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                ref={videoDom}
                autoPlay
                muted>
                <source src={videoUrl} />
            </video>
            {textVideo ? <div className={clsx(styles.videoText)}>
                <div className={clsx(styles.videoTextName)}>
                    {/* img */}
                    <img alt="anh1" src={textVideo ? imgData[0].imgUrl : ''} />
                </div>
                <div className={clsx(styles.videoTextPlace)}>
                    {textVideo ? imgData[0].place : ''}
                </div>
            </div> : ''}
            <button onClick={handleClickStartStop} className={clsx(styles.videoIcon)}>
                {isVideoPlay ? <IoPause /> : <IoPlay />}
            </button>
        </div>
    </div>
}

export default Video