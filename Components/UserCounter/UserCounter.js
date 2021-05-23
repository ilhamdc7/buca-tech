import React from 'react'
import styles from './UserCounter.module.css'
import MessageIcon from '../../public/Media/Icons/message.svg'
import ManIcon from '../../public/Media/Icons/man.svg'
import GroupIcon from '../../public/Media/Icons/GroupNote.svg'

const UserCounter = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentTitle}>
                        <span className={styles.contentTitleSpan}>lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className={styles.contentText}>
                        <span className={styles.contentTextSpan}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span>
                    </div>
                </div>
                <div className={styles.counterContainer}>
                    <div className={styles.firstRow}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}>
                                <MessageIcon/>
                            </div>
                            <div className={styles.iconInteger}>
                                <span className={styles.iconIntegerSpan}>95%</span>
                            </div>
                            <div className={styles.iconText}>
                                <span className={styles.iconTextSpan}>Job Success</span>
                            </div>
                        </div>
                        <div className={styles.iconContainer2}>
                            <div className={styles.icon}>
                                <ManIcon/>
                            </div>
                            <div className={styles.iconInteger}>
                                <span className={styles.iconIntegerSpan}>1684</span>
                            </div>
                            <div className={styles.iconText}>
                                <span className={styles.iconTextSpan}>Active User</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondRow}>
                    <div className={styles.iconContainer}>
                            <div className={styles.icon}>
                                <MessageIcon/>
                            </div>
                            <div className={styles.iconInteger}>
                                <span className={styles.iconIntegerSpan}>>8K</span>
                            </div>
                            <div className={styles.iconText}>
                                <span className={styles.iconTextSpan}>VIP Users</span>
                            </div>
                        </div>
                        <div className={styles.iconContainer2}>
                            <div className={styles.icon}>
                                <GroupIcon/>
                            </div>
                            <div className={styles.iconInteger}>
                                <span className={styles.iconIntegerSpan}>1684</span>
                            </div>
                            <div className={styles.iconText}>
                                <span className={styles.iconTextSpan}>Contracts</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" width="100%" height="100%" />
            </div>
        </div>
    )
}

export default UserCounter
