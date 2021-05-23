import React, { useState } from 'react'
import styles from './PersonalProfile.module.css'
import ArrowPRV from '../../public/Media/Icons/arrowPRV.svg'
import ArrowNXT from '../../public/Media/Icons/arrowNXT.svg'
import ReactPlayer from 'react-player/youtube';


const PersonalProfile = () => {

    const [situation, setSituation] = useState(-5)

    const nextButton = () => {
       
            setSituation(situation - 105 )
        
    }

    const previousButton = () => {
        if(situation !== -5){
            setSituation(situation + 105 )
        }
        
    }


    return (
        <div>
            <div className={styles.container}>
                <div className={styles.leftArrow}>
                    <div className={styles.arrowContainerPRV} onClick={previousButton}>
                        <ArrowPRV/>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.slideBody} style={{transform: "translateX(" + situation + "% )"}}>
                        <div className={styles.largeCard}>
                            <div className={styles.firstRow}>
                                <div className={styles.content}>
                                    <div className={styles.contentTitle}>
                                        <span className={styles.contentTitleSpan}>Personal Profile</span>
                                    </div>
                                    <div className={styles.contentText}>
                                        <span className={styles.contentTextSpan}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                                    </div>
                                </div>
                                <div className={styles.video}>
                                    <ReactPlayer url="https://www.youtube.com/watch?v=IVaILEl9mIE" width="100%" height="100%"/>
                                </div>
                            </div>
                            <div className={styles.secondRow}>
                                <div className={styles.descriptionCard}>
                                    <div className={styles.descriptionLayer}>
                                        <div className={styles.leftLayer}>
                                            <div className={styles.leftLayerContent}>
                                                DAN REYNOLDS
                                            </div>
                                            <button className={styles.leftLayerButton}>Model</button>
                                        </div>
                                    </div>
                                    <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-young-manager-handshake-with-new-employee-picture-id1129342452?k=6&m=1129342452&s=612x612&w=0&h=pde0arEZ6m5fF56-TZ-EAeH4pTGnNLSOoB7LV4IQrsg=" width="100%" height="100%"/>
                                </div>
                                <div className={styles.descriptionCard2}>
                                    <div className={styles.descriptionLayer}>
                                        <div className={styles.leftLayer}>
                                            <div className={styles.leftLayerContent}>
                                                DAN REYNOLDS
                                            </div>
                                            <button className={styles.leftLayerButton}>Model</button>
                                        </div>
                                    </div>
                                    <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-young-manager-handshake-with-new-employee-picture-id1129342452?k=6&m=1129342452&s=612x612&w=0&h=pde0arEZ6m5fF56-TZ-EAeH4pTGnNLSOoB7LV4IQrsg=" width="100%" height="100%"/>
                                </div>
                                <div className={styles.descriptionCard2}>
                                    <div className={styles.descriptionLayer}>
                                        <div className={styles.leftLayer}>
                                            <div className={styles.leftLayerContent}>
                                                ELISABETH BECKER
                                            </div>
                                            <button className={styles.leftLayerButton}>Model</button>
                                        </div>
                                    </div>
                                    <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-young-manager-handshake-with-new-employee-picture-id1129342452?k=6&m=1129342452&s=612x612&w=0&h=pde0arEZ6m5fF56-TZ-EAeH4pTGnNLSOoB7LV4IQrsg=" width="100%" height="100%"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.largeCard}>
                            <div className={styles.firstRow}>
                                <div className={styles.content}>
                                    <div className={styles.contentTitle}>
                                        <span className={styles.contentTitleSpan}>Personal Profile</span>
                                    </div>
                                    <div className={styles.contentText}>
                                        <span className={styles.contentTextSpan}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                                    </div>
                                </div>
                                <div className={styles.video}>
                                    <ReactPlayer url="https://www.youtube.com/watch?v=7tz4Ya6gzG4" width="100%" height="100%"/>
                                </div>
                            </div>
                            <div className={styles.secondRow}>
                                <div className={styles.descriptionCard}>
                                    <div className={styles.descriptionLayer}>
                                        <div className={styles.leftLayer}>
                                            <div className={styles.leftLayerContent}>
                                                ELISABETH BECKER
                                            </div>
                                            <button className={styles.leftLayerButton}>Model</button>
                                        </div>
                                    </div>
                                    <img src="https://ranchocarne.org/wp-content/uploads/2020/12/businesses-need-seo-1520x800-2.png" width="100%" height="100%"/>
                                </div>
                                <div className={styles.descriptionCard2}>
                                    <div className={styles.descriptionLayer}>
                                        <div className={styles.leftLayer}>
                                            <div className={styles.leftLayerContent}>
                                                ELISABETH BECKER
                                            </div>
                                            <button className={styles.leftLayerButton}>Model</button>
                                        </div>
                                    </div>
                                    <img src="https://ranchocarne.org/wp-content/uploads/2020/12/businesses-need-seo-1520x800-2.png" width="100%" height="100%"/>
                                </div>
                                <div className={styles.descriptionCard2}>
                                    <div className={styles.descriptionLayer}>
                                        <div className={styles.leftLayer}>
                                            <div className={styles.leftLayerContent}>
                                                ELISABETH BECKER
                                            </div>
                                            <button className={styles.leftLayerButton}>Model</button>
                                        </div>
                                    </div>
                                <img src="https://ranchocarne.org/wp-content/uploads/2020/12/businesses-need-seo-1520x800-2.png" width="100%" height="100%"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightArrow}>
                    <div className={styles.arrowContainerNXT} onClick={nextButton}>
                        <ArrowNXT/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalProfile
