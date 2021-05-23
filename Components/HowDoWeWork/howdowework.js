import React from 'react'
import styles from './howdowework.module.css'
import ReactPlayer from 'react-player/youtube'

const howdowework = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.firstRow}>
                    <span className={styles.firstRowSpan}>HOW DO WE WORK</span>
                </div>
                <div className={styles.secondRow}>
                    <div className={styles.video}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" width="100%" height="100%"/>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.content}>
                            <div className={styles.contentTitle}><span className={styles.contentTitleSpan}>LOREM IPSUM</span></div>
                            <div className={styles.contentText}><span className={styles.contentTextSpan}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
                        </div>
                        <div className={styles.images}>
                            <div className={styles.firstImage}>
                                <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="100%" />
                            </div>
                            <div className={styles.secondImage}>
                                <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default howdowework
