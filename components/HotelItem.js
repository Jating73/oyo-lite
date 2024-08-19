import { Dining, Elevator, NetworkWifi, Sanitizer } from '@mui/icons-material'
import classes from './HotelItem.module.css'

export default function HotelItem() {
    return (
        <div className={classes.hotelCardWrapper}>
            <div className={classes.hotelCard}>
                <div className={classes.hotelCard__imageWrapper}>

                </div>
                <div className={classes.hotelCard__descriptionWrapper}>
                    <div className={classes.hotelCard__description}>
                        {/* Hotel Room Description */}
                        <div className={classes.hotelCard__content}>
                            <div className={classes.contentWrapper}></div>
                            <div className={classes.ratingWrapper}></div>
                            <div className={classes.amenityWrapper}>
                                <div className={classes.amenity}>
                                    <span className={classes.amenity__icon}>{amenitiesIconMapping.wifi}</span>
                                    <span className={classes.amenity__text}>Free Wifi</span>
                                </div>
                                <div className={classes.amenity}>
                                    <span>+ 9 more</span>
                                </div>
                            </div>
                        </div>
                        {/* Book Now Button */}
                        <div className={classes.hotelCard__priceButton}>
                            <div className={classes.hotelCard__priceButtonWrapper}>
                                <div className={classes.priceGroup}>
                                    <div className={classes.priceNumber}>
                                        <span className={classes.price__final}>
                                            ₹600
                                        </span>
                                        <span className={classes.price__striked}>
                                            ₹2669
                                        </span>
                                        <span className={classes.price__discount}>71% off</span>
                                    </div>
                                    <div className={classes.pricePerNight}>
                                        <span>+ ₹148 taxes &amp; fees</span>
                                    </div>
                                </div>
                                <div className={classes.btnGroup}>
                                    <button className={classes.detailsBtn}>View Details</button>
                                    <button className={classes.bookBtn}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const amenitiesIconMapping = {
    'wifi': <NetworkWifi />,
    'elevator': <Elevator />,
    'dining': <Dining />,
    'sanitize': <Sanitizer />,
}