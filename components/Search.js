import React, { useState } from 'react';
import classes from './Search.module.css';

import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { Autocomplete, TextField } from '@mui/material';

export default function Search() {

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
        <div className={classes.searchContainer}>
            <div className={classes.searchWrapper}>
                <h1 className={classes.searchWrapper__tagline}>Over 174,000+ hotels and homes across 35+ countries</h1>
                <div className={classes.searchWrapper__widgetContainer}>
                    <div className={classes.searchWrapper__widget}>
                        <div className={classes.searchWrapper__cityPicker}>
                            <Autocomplete
                                disablePortal
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Search City" />}
                                options={topCities}
                            />
                        </div>
                        <div className={classes.searchWrapper__datePicker}>
                            <DatePicker value={checkIn} onChange={handleCheckInChange} minDate={moment()} disablePast />
                            <DatePicker value={checkOut} onChange={handleCheckOutChange} minDate={checkIn} />
                        </div>
                        <div className={classes.searchWrapper__buttonContainer}>
                            <button className={classes.searchWrapper__button}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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