import React, { useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import VectorDown from '../../public/Media/Icons/VectorDown.svg'
import Buca from '../../public/Media/Icons/buca.svg'
import Person from '../../public/Media/Icons/person.svg'
import BuildingLogo from '../../public/Media/Icons/building.svg'

const header = () => {

const router = useRouter()


    return (
        <div>
            <div className={styles.container} >
            <nav className={styles.header}>
                <div className={styles.logo}>
                    <Buca className={styles.logoSVG}/>
                </div>
                <div className={styles.menu}>
                   <div className={styles.menuItem}>
                        <span className={router.pathname == '/' ? styles.menuItemSpanActive : styles.menuItemSpan}><Link href="/">Home</Link></span>   
                   </div>
                   <div className={styles.menuItem2}>
                        <span className={router.pathname == '/profiles' ? styles.menuItemSpanActive : styles.menuItemSpan}><Link href="/profiles">Profiles</Link></span>
                   </div>
                   <div className={styles.menuItem3}>
                        <span className={router.pathname == '/about' ? styles.menuItemSpanActive : styles.menuItemSpan}><Link href="/about">About</Link></span>
                   </div>
                   <div className={styles.menuItem3}>
                        <span className={router.pathname == '/pricing' ? styles.menuItemSpanActive : styles.menuItemSpan}><Link href="#">Pricing</Link></span>
                   </div>
                   <div className={styles.menuItem3}>
                        <span className={router.pathname == '/contacts' ? styles.menuItemSpanActive : styles.menuItemSpan}><Link href="#">Contacts</Link></span>
                   </div>
                </div>
                <div className={styles.signInContainer}>
                    <button className={styles.loginBtn}>Log In</button>
                    <div className={styles.language}>
                        <div className={styles.currentLanguage}>EN</div>
                        <div className={styles.vector}><VectorDown/></div>
                    </div>
                </div>
            </nav>
            <img className={styles.img1} src="https://images.unsplash.com/photo-1503470380838-5141f184701a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                <div className={styles.leftSide}>
                    <div className={styles.title}>
                        <span className={styles.titleSpan}>Lorem ipsum dolor sit amet</span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.contentSpan}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</span>
                    </div>
                    <div className={styles.leftBTN}>
                        <button className={styles.leftSideButton}>
                            Button
                        </button>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.firstRow}>
                        <div className={styles.rowIcon}>
                            <Person/>
                        </div>
                        <button className={styles.rowBtn}>Personal profile</button>
                    </div>
                    <div className={styles.secondRow}>
                         <div className={styles.rowIcon}>
                            <BuildingLogo/>
                        </div>
                        <button className={styles.rowBtn}>Companies</button>
                    </div>
                    <div className={styles.thirdRow}>
                    <div className={styles.rowIcon}>
                            <Person/>
                        </div>
                        <button className={styles.rowBtn}>Users</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
