import clsx from 'clsx'
import { useState, useRef, useEffect } from 'react'

import styles from './language.module.scss'
import grid from '../../grid.module.scss'
import { XIcon, TranslateIcon, CheckIcon } from '@heroicons/react/solid'


function Language({ show, showOnlyLang, showOnlyMoney }) {
    // Hook
    const [languageId, setLanguageId] = useState(1)
    const [autoLang, setAutoLang] = useState(clsx(styles.autoTransButton))
    const [show1, setShow] = useState(show);
    const [showLang, setShowLang] = useState(clsx(styles.langButton, styles.activeButton))
    const [showMoney, setShowMoney] = useState(clsx(styles.moneyButton, styles.cursorPointer))

    const autoLangButton = useRef()
    const languageNode = useRef()
    const moneyNode = useRef()

    useEffect(() => {
        setShow(!show1)
    }, [show])

    // HANDLE
    const handleAutoLang = () => {
        setAutoLang(() => {
            if (!autoLangButton.current.className.includes('active')) {
                return clsx(styles.autoTransButton, styles.active)
            } else {
                return clsx(styles.autoTransButton)
            }
        }, [])
    }

    const handleLang = (item, e) => {
        setLanguageId(item.id)
    }

    const handleShow = () => {
        setShow(false)
    }

    const handleLanguageSite = (e) => {
        if (!e.target.className.includes('activeButton')) {
            setShowMoney(clsx(styles.moneyButton, styles.cursorPointer))
            setShowLang(clsx(styles.langButton, styles.activeButton))
            moneyNode.current.className = clsx(styles.displayNone, styles.langSuggest)
            languageNode.current.className = clsx(styles.langChange, styles.cursorPointer)
        }
    }

    const handleMoneySite = (e) => {
        if (!e.target.className.includes('activeButton')) {
            setShowMoney(clsx(styles.moneyButton, styles.activeButton))
            setShowLang(clsx(styles.langButton, styles.cursorPointer))
            moneyNode.current.className = clsx(styles.langSuggest)
            languageNode.current.className = clsx(styles.displayNone, styles.langChange)
        }
    }

    // Storage
    const langSuggest = [
        {
            id: 1,
            type: 'English',
            description: 'United States'
        },
        {
            id: 2,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 3,
            type: 'English',
            description: 'United Kingdom'
        }
    ]

    const langFull = [
        {
            id: 1,
            type: 'Tiếng Việt',
            description: 'Việt Nam'
        },
        {
            id: 2,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 3,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 4,
            type: 'English',
            description: 'United States'
        },
        {
            id: 5,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 6,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 7,
            type: 'English',
            description: 'United States'
        },
        {
            id: 8,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 9,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 10,
            type: 'English',
            description: 'United States'
        },
        {
            id: 11,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 12,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 13,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 14,
            type: 'Tiếng Việt',
            description: 'Việt Nam'
        },
        {
            id: 15,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 16,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 17,
            type: 'English',
            description: 'United States'
        },
        {
            id: 18,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 19,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 20,
            type: 'English',
            description: 'United States'
        },
        {
            id: 21,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 22,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 23,
            type: 'English',
            description: 'United States'
        },
        {
            id: 24,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 25,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 26,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 27,
            type: 'Tiếng Việt',
            description: 'Việt Nam'
        },
        {
            id: 28,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 29,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 30,
            type: 'English',
            description: 'United States'
        },
        {
            id: 31,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 32,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 33,
            type: 'English',
            description: 'United States'
        },
        {
            id: 34,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 35,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 36,
            type: 'English',
            description: 'United States'
        },
        {
            id: 37,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 38,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 39,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 40,
            type: 'Tiếng Việt',
            description: 'Việt Nam'
        },
        {
            id: 41,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 42,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 43,
            type: 'English',
            description: 'United States'
        },
        {
            id: 44,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 45,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 46,
            type: 'English',
            description: 'United States'
        },
        {
            id: 47,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 48,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 49,
            type: 'English',
            description: 'United States'
        },
        {
            id: 50,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 51,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 52,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 53,
            type: 'Tiếng Việt',
            description: 'Việt Nam'
        },
        {
            id: 54,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 55,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 56,
            type: 'English',
            description: 'United States'
        },
        {
            id: 57,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 58,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 59,
            type: 'English',
            description: 'United States'
        },
        {
            id: 60,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 61,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 62,
            type: 'English',
            description: 'United States'
        },
        {
            id: 63,
            type: 'English',
            description: 'Australia'
        },
        {
            id: 64,
            type: 'English',
            description: 'United Kingdom'
        },
        {
            id: 65,
            type: 'English',
            description: 'United Kingdom'
        }
    ]

    const moneyFull = [
        {
            id: 1,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 2,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 3,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 4,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 5,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 6,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 7,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 8,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 9,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 10,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 11,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 12,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 13,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 14,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 15,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 16,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 17,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 18,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 19,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 20,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
        {
            id: 21,
            type: 'Đô la Mỹ',
            description: 'USD - $'
        },
        {
            id: 22,
            type: 'Việt Nam Đồng',
            description: 'VNĐ'
        },
    ]

    return (
        <div className={show1 ? clsx(styles.container, styles.show) : clsx(styles.container)}>

            <div onClick={handleShow} className={styles.background}></div>
            <div className={styles.containerContent}>
                <div className={styles.exitIcon}>
                    <div onClick={handleShow}>
                        <XIcon />
                    </div>
                </div>
                <div className={styles.content}>
                    {/* NavBar */}
                    <div className={styles.navBar}>
                        <div onClick={handleLanguageSite} className={showLang}>Ngôn ngữ và khu vực</div>
                        <div onClick={handleMoneySite} className={showMoney}>Loại tiền tệ</div>
                    </div>
                    {/* Content 1 */}
                    <div ref={languageNode} className={clsx(styles.langChange)}>
                        <div className={styles.autoTrans}>
                            <div className={styles.autoTransText}>
                                <div className={styles.autoTransTextContent}>
                                    <h5>Bản dịch</h5>
                                    <span><TranslateIcon /></span>
                                </div>
                                <p>Dịch tự động nội dung mô tả và đánh giá sang Tiếng Việt.</p>
                            </div>
                            <div onClick={handleAutoLang} ref={autoLangButton} className={clsx(autoLang)}>
                                <div><CheckIcon /></div>
                            </div>
                        </div>
                        <div className={styles.langSuggest}>
                            <h2 className={styles.langSuggestHeading}>Ngôn ngữ và khu vực được đề xuất</h2>
                            <ul>
                                {langSuggest.map(item => (
                                    <li key={item.id} className={clsx(styles.langSuggestItem, grid.l3, grid.m4, grid.c6)}>
                                        <h5>{item.type}</h5>
                                        <p>{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* AllLang */}
                        <div className={styles.langSuggest}>
                            <h2 className={styles.langSuggestHeading}>Chọn ngôn ngữ và khu vực</h2>
                            <ul>
                                {langFull.map(item => {
                                    if (item.id === languageId) {
                                        return <li
                                            onClick={(e) => { handleLang(item, e) }}
                                            key={item.id}
                                            className={clsx(styles.active, styles.langSuggestItem, grid.l3, grid.m4, grid.c6)}
                                        >
                                            <h5>{item.type}</h5>
                                            <p>{item.description}</p>
                                        </li>
                                    } else {
                                        return <li
                                            onClick={(e) => { handleLang(item, e) }}
                                            key={item.id}
                                            className={clsx(styles.langSuggestItem, grid.l3, grid.m4, grid.c6)}
                                        >
                                            <h5>{item.type}</h5>
                                            <p>{item.description}</p>
                                        </li>
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                    {/* Content 2 */}
                    <div ref={moneyNode} className={clsx(styles.langSuggest, styles.displayNone)}>
                        <h2 className={styles.langSuggestHeading}>Chọn loại tiền tệ</h2>
                        <ul>
                            {moneyFull.map(item => {
                                if (item.id === languageId) {
                                    return <li
                                        onClick={(e) => { handleLang(item, e) }}
                                        key={item.id}
                                        className={clsx(styles.active, styles.langSuggestItem, grid.l3, grid.m4, grid.c6)}
                                    >
                                        <h5>{item.type}</h5>
                                        <p>{item.description}</p>
                                    </li>
                                } else {
                                    return <li
                                        onClick={(e) => { handleLang(item, e) }}
                                        key={item.id}
                                        className={clsx(styles.langSuggestItem, grid.l3, grid.m4, grid.c6)}
                                    >
                                        <h5>{item.type}</h5>
                                        <p>{item.description}</p>
                                    </li>
                                }
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Language