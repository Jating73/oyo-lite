import { Dining, Elevator, NetworkWifi, Sanitizer } from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star';
import classes from './HotelItem.module.css'
import { faWifi, faUtensils, faCreditCard, faCarBattery, faDisplay, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function HotelItem({ hotel }) {

    return (
        <div className={classes.hotelCardWrapper}>
            <div className={classes.hotelCard}>
                <div className={classes.hotelCard__imageWrapper}>
                    <div className={classes.swipperMainWrapper}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className={classes.swiperContainer}
                        >
                            {hotel.images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className={classes.hotelCard__descriptionWrapper}>
                    <div className={classes.hotelCard__description}>

                        <div className={classes.hotelCard__content}>
                            <div className={classes.contentWrapper}>
                                <div>
                                    <Link href={`/${hotel.id}`}>
                                        <h3 className={classes.hotelName}>{hotel.name}</h3>
                                    </Link>
                                    <div className={classes.hotelAddress}>
                                        <span>{hotel.address}</span>
                                        <span className={classes.hotelAddress__dot}>.</span>
                                        <span className={classes.hotelAddress__viewMap}>
                                            <span className={classes.hotelAddress__locationIcon}>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            <span className={classes.hotelAddress__distanceText}>{hotel.distance} km</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.ratingWrapper}>
                                <div>
                                    <span className={classes.hotelRating}>
                                        <span className={classes.hotelRating__number}>{hotel.rating}</span>
                                        <span className={classes.hotelRating__icon}>
                                            <StarIcon fontSize='small' />
                                        </span>
                                    </span>
                                    <span className={classes.hotelRating__totalRating}>({hotel.total_rating} Ratings)</span>
                                    <span className={classes.hotelRating__dot}>.</span>
                                    <span className={classes.hotelRating__summary}>{hotel.summary}</span>
                                </div>
                            </div>
                            <div className={classes.amenityWrapper}>
                                <div className={classes.amenity}>
                                    <span className={classes.amenity__icon}>{amenitiesIconMapping.fontAwesome.wifi}</span>
                                    <span className={classes.amenity__text}>{hotel.amenities[0]}</span>
                                </div>
                                <div className={classes.amenity}>
                                    <span className={classes.amenity__icon}>{amenitiesIconMapping.fontAwesome.power}</span>
                                    <span className={classes.amenity__text}>{hotel.amenities[1]}</span>
                                </div>
                                <div className={classes.amenity}>
                                    <span className={classes.amenity__icon}>{amenitiesIconMapping.fontAwesome.tv}</span>
                                    <span className={classes.amenity__text}>{hotel.amenities[2]}</span>
                                </div>
                                <div className={classes.amenity}>
                                    <span className={classes.amenity__text}>
                                        <span>+ {hotel.amenities.length - 3} more</span>
                                    </span>
                                </div>
                            </div>
                        </div>

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
    'fontAwesome': {
        'wifi': <FontAwesomeIcon icon={faWifi} size='sm' />,
        'elevator': <Elevator />,
        'dining': <FontAwesomeIcon icon={faUtensils} size='sm' />,
        'sanitize': <Sanitizer />,
        'card': <FontAwesomeIcon icon={faCreditCard} size='sm' />,
        'power': <FontAwesomeIcon icon={faCarBattery} size='sm' />,
        'tv': <FontAwesomeIcon icon={faDisplay} size='sm' />
    },
    'mui': {
        'wifi': <NetworkWifi />,
        'elevator': <Elevator />,
        'dining': <Dining />,
        'sanitize': <Sanitizer />,
        'card': <FontAwesomeIcon icon="fa-light fa-credit-card" />,
        'power': <FontAwesomeIcon icon="fa-light fa-car-battery" />,
        'tv': <FontAwesomeIcon icon="fa-solid fa-display" size='xl' />
    }
}