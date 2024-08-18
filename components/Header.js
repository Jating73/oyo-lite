import React from "react";

import { Business, Phone, Language, Person, BusinessCenterOutlined } from '@mui/icons-material'
import classes from './Header.module.css'

export default function Header() {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.headerWrapper__primary}>
                <div className={classes.headerWrapper__left}>
                    <div className={classes.logoWrapper}>
                        <span className={classes.logoWrapper__logo}>
                            <svg width="81" height="29" viewBox="0 0 81 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_310_13411)"> <path d="M14.3888 29C6.44207 29 0 22.5081 0 14.5C0 6.49187 6.44207 0 14.3888 0C22.3355 0 28.7775 6.49187 28.7775 14.5C28.7775 22.5081 22.3355 29 14.3888 29ZM14.3888 20.0769C17.4452 20.0769 19.9229 17.5801 19.9229 14.5C19.9229 11.42 17.4452 8.92308 14.3888 8.92308C11.3323 8.92308 8.85463 11.42 8.85463 14.5C8.85463 17.5801 11.3323 20.0769 14.3888 20.0769Z" fill="#282828"></path> <path d="M66.3888 29C58.4421 29 52 22.5081 52 14.5C52 6.49187 58.4421 0 66.3888 0C74.3355 0 80.7775 6.49187 80.7775 14.5C80.7775 22.5081 74.3355 29 66.3888 29ZM66.3888 20.0769C69.4452 20.0769 71.9229 17.5801 71.9229 14.5C71.9229 11.42 69.4452 8.92308 66.3888 8.92308C63.3323 8.92308 60.8546 11.42 60.8546 14.5C60.8546 17.5801 63.3323 20.0769 66.3888 20.0769Z" fill="#282828"></path> <path d="M25 0H35.3728L40.6272 8.67084L45.6947 0H55.9686L45.1222 18.5587V29H36.2695V18.5971L25 0Z" fill="#282828"></path> </g> <defs> <clipPath id="clip0_310_13411"> <rect width="81" height="29" fill="white"></rect> </clipPath> </defs> </svg>
                        </span>
                    </div>
                </div>
                <div className={classes.headerWrapper__right}>
                    <div className={classes.promoCard}>
                        <div className={classes.promoCard__card}>
                            <div className={classes.promoCard__iconWrapper}>
                                <BusinessCenterOutlined fontSize="large" color="inherit" />
                            </div>
                            <div className={classes.promoCard__contentWrapper}>
                                <div className={classes.promoCard__text}>
                                    <span>OYO for business</span>
                                </div>
                                <div className={classes.promoCard__subtext}>Trusted by 5000 corporates</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.promoCard}>
                        <div className={classes.promoCard__card}>
                            <div className={classes.promoCard__iconWrapper}>
                                <Business fontSize="large" color="inherit" />
                            </div>
                            <div className={classes.promoCard__contentWrapper}>
                                <div className={classes.promoCard__text}>
                                    <span>List your property</span>
                                </div>
                                <div className={classes.promoCard__subtext}>Start earning in 30 mins</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.promoCard}>
                        <div className={classes.promoCard__card}>
                            <div className={classes.promoCard__iconWrapper}>
                                <Phone fontSize="large" color="inherit" />
                            </div>
                            <div className={classes.promoCard__contentWrapper}>
                                <div className={classes.promoCard__text}>
                                    <span>0124-6201611</span>
                                </div>
                                <div className={classes.promoCard__subtext}>Call us to Book now</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.promoCard}>
                        <div className={classes.promoCard__card}>
                            <div className={classes.promoCard__iconWrapper}>
                                <Language fontSize="large" color="inherit" />
                            </div>
                            <div className={classes.promoCard__contentWrapper}>
                                <div className={classes.promoCard__text}>
                                    <span>English</span>
                                </div>
                                <div className={classes.promoCard__subtext}></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.authButton}>
                        <div className={classes.authButton__Wrapper}>
                            <div className={classes.authButton__iconWrapper}>
                                <Person fontSize="large" color="inherit" />
                            </div>
                            <div className={classes.authButton__contentWrapper}>
                                <div className={classes.authButton__text}>
                                    Login / Signup
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}