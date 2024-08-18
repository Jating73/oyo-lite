import classes from './Footer.module.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

import { chunkArray } from '@/helpers/utils';
import Link from 'next/link';

export default function Footer() {

    const rows = chunkArray(cities, 6);
    const primaryRows = chunkArray(primaryLinks, 2);
    const secondaryRows = chunkArray(secondaryLinks, 2);

    return (
        <div className={classes.footer__wrapper}>
            <div className={classes.footer__main}></div>
            <div className={classes.footer__app}>
                <div className={classes.footer__app__container}>
                    <div className={classes.footer__app__topLinks}>
                        <div>
                            <span>Download OYO app for exciting offers.</span>
                        </div>
                        <div className={classes.buttonContainer}>
                            {/* App Store Button */}
                            <Link href="https://itunes.apple.com/in/app/oyo-rooms-book-delightful/id988141624?mt=8" target="_blank">
                                <img
                                    src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                                    alt="Download on the App Store"
                                    style={{ maxWidth: '140px', height: 'auto' }}
                                />
                            </Link>
                            {/* Play Store Button */}
                            <Link href="https://play.google.com/store/apps/details?id=com.oyo.consumer&hl=en" target="_blank">
                                <img
                                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    style={{ maxWidth: '160px', height: 'auto' }}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={classes.footer__app__primaryLinks}>
                        {primaryRows.map((row, rowIndex) => (
                            <div key={rowIndex} className={classes.row}>
                                {row.map((city, cityIndex) => (
                                    <div key={cityIndex} className={classes.link}>
                                        {city}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={classes.footer__app__secondaryLinks}>
                        {secondaryRows.map((row, rowIndex) => (
                            <div key={rowIndex} className={classes.row}>
                                {row.map((city, cityIndex) => (
                                    <div key={cityIndex} className={classes.link}>
                                        {city}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={classes.footer__hotels}>
                <div className={classes.footer__hotels__heading}>
                    OYO Hotels
                </div>
                <div className={classes.footer__hotels__grid}>
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className={classes.row}>
                            {row.map((city, cityIndex) => (
                                <div key={cityIndex} className={classes.city}>
                                    <Link href={`/hotels/${city}`}>
                                        Hotels in {city}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.footer__social}>
                <div className={classes.footer__social__container}>
                    <div className={classes.social_icons}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={20} color='#fff' />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={20} color='#fff' />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} color='#fff' />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20} color='#fff' />
                        </a>
                    </div>
                    <div className={classes.copyright}>
                        2021-2024 © Oyo Lite Limited
                    </div>
                </div>
            </div>
        </div>
    )
}

const cities = [
    'Goa',
    'Puri',
    'Mahabaleshwar',
    'Jaipur',
    'Shimla',
    'Manali',
    'Udaipur',
    'Mussoorie',
    'Pondicherry',
    'Delhi',
    'Mumbai',
    'Nainital',
    'Lonavala',
    'Munnar',
    'Bangalore',
    'Mysore',
    'Darjeeling',
    'Mount Abu',
    'Kodaikanal',
    'Hyderabad',
    'Pune',
    'Chandigarh',
    'Shirdi',
    'Agra',
    'Gangtok',
    'Coorg',
    'Chennai',
    'Tirupati',
    'Dalhousie',
    'Haridwar',
    'Kolkata',
    'Ahmedabad',
    'Shillong',
    'Rishikesh',
    'Varanasi',
    'Gurgaon',
    'Mandarmoni',
    'Daman',
    'Yercaud',
    'Amritsar',
    'Madurai',
    'Coimbatore',
    'Kasauli',
    'Dehradun',
    'Japan',
];

const primaryLinks = [
    'About us',
    'Teams / Careers',
    'Blogs',
    'Support',
    'Official OYO Blog',
    'Investor Relations',
    'OYO Circle',
    'OYO Frames'
]

const secondaryLinks = [
    'Terms and conditions',
    'Guest Policies',
    'Privacy Policy',
    'Trust And Safety',
    'Cyber Security',
    'Cyber Security Awareness',
    'Responsible Disclosure',
    'Advertise your Homes'
]