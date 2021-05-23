import React, { useState } from 'react'
import styles from './Pricing.module.css'
import ArrowPRV from '../../public/Media/Icons/arrowPRV.svg'
import ArrowNXT from '../../public/Media/Icons/arrowNXT.svg'




const Pricing = () => {




    const [slider, setSlider] = useState(0)

    const nextBTN = () =>{
        if(slider === 0){
            setSlider(slider - 100)
        }
    }
    
    
    const previousBTN = () => {
        if(slider === -100){
            setSlider(slider + 100)
        }
        
    }




    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <span className={styles.titleSpan}>PRICING</span>
                </div>
                <div className={styles.largeCard}>
                    <div className={styles.btnPrvContainer}>
                        <div className={styles.btnPrv} onClick={previousBTN} style={{display: slider === 0 ? "none" : "flex"}}>
                            <ArrowPRV/>
                        </div>
                    </div>
                    <div className={styles.btnPrvContainer2}>
                        <div className={styles.btnPrv} onClick={nextBTN} style={{display: slider === -100 ? "none" : "flex"}}>
                            <ArrowNXT/>
                        </div>
                    </div>
                    <div className={styles.slider} style={{transform: "translateX(" + slider +"%)" }}>
                        <div className={styles.sliderCard}>
                            <div className={styles.img}>
                                <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg" width="100%" height="100%"/>
                            </div>
                            <div className={styles.sliderContent}>
                                <div className={styles.firstRow}>
                                    <div className={styles.contentTitle}>
                                        <span className={styles.contentTitleSpan}>ONE-TIME PROJECT</span>
                                    </div>
                                    <div className={styles.price}>
                                        <span className={styles.priceSpan}>9.99$</span>
                                    </div>
                                </div>
                                <div className={styles.secondRow}>
                                    <div className={styles.contentText}>
                                        <span className={styles.contentTextSpan}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.thirdRow}>
                                    <div className={styles.btnSelectionContainer}>
                                        <button className={styles.btnSelection}>Popular Selection</button>
                                    </div>
                                    <div className={styles.readMore}>
                                        <a className={styles.readMoreSpan} href="#">More...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sliderCard2}>
                            <div className={styles.img}>
                                <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg" width="100%" height="100%"/>
                            </div>
                            <div className={styles.sliderContent}>
                                <div className={styles.firstRow}>
                                    <div className={styles.contentTitle}>
                                        <span className={styles.contentTitleSpan}>ONE-TIME PROJECT</span>
                                    </div>
                                    <div className={styles.price}>
                                        <span className={styles.priceSpan}>9.99$</span>
                                    </div>
                                </div>
                                <div className={styles.secondRow}>
                                    <div className={styles.contentText}>
                                        <span className={styles.contentTextSpan}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.thirdRow}>
                                    <div className={styles.btnSelectionContainer}>
                                        <button className={styles.btnSelection}>Popular Selection</button>
                                    </div>
                                    <div className={styles.readMore}>
                                        <a className={styles.readMoreSpan} href="#">More...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
