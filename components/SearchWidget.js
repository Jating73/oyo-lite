import React, { Fragment, useState } from 'react'
import classes from './SearchWidget.module.css';

import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { Autocomplete, TextField } from '@mui/material';


import { Phone, Person } from '@mui/icons-material'

export default function SearchWidget({ showSearchBar }) {

    const [checkIn, setCheckIn] = useState(moment());
    const [checkOut, setCheckOut] = useState(null);

    const handleCheckInChange = (value) => {
        setCheckIn(value ? moment(value) : null);
        setCheckOut(value ? moment(value) : null)
    }

    const handleCheckOutChange = (value) => {
        setCheckOut(value ? moment(value) : null);
    }

    return (
        <Fragment>
            <div className={showSearchBar !== true ? classes.searchWrapper__widgetContainer : classes.searchWrapperNavigation__widgetConatiner}>
                <div className={showSearchBar !== true ? classes.searchWrapper__widget : classes.searchWrapperNavigation__widget}>
                    <div className={showSearchBar !== true ? classes.searchWrapper__cityPicker : classes.searchWrapperNavigation__cityPicker}>
                        <Autocomplete
                            disablePortal
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Search City" />}
                            options={topCities}
                        />
                    </div>
                    <div className={showSearchBar !== true ? classes.searchWrapper__datePicker : classes.searchWrapperNavigation__datePicker}>
                        <DatePicker value={checkIn} onChange={handleCheckInChange} minDate={moment()} disablePast />
                        <DatePicker value={checkOut} onChange={handleCheckOutChange} minDate={checkIn} />
                    </div>
                    <div className={showSearchBar !== true ? classes.searchWrapper__buttonContainer : classes.searchWrapperNavigation__buttonContainer}>
                        <button className={showSearchBar !== true ? classes.searchWrapper__button : classes.searchWrapperNavigation__button}>Search</button>
                    </div>

                </div>
            </div>
            {showSearchBar && (
                <div className={classes.menu}>
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
            )}
        </Fragment>

    )
}


const topCities = [
    { label: 'Bangalore' },
    { label: 'Chennai' },
    { label: 'Delhi' },
    { label: 'Gurgaon' },
    { label: 'Hyderabad' },
    { label: 'Kolkata' },
    { label: 'Mumbai' },
    { label: 'Noida' },
    { label: 'Pune' },
    { label: 'Jaipur' },
    { label: 'Agra' },
    { label: 'Ahmedabad' },
    { label: 'Goa' },
    { label: 'Coimbatore' }
];