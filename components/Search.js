import React, { useState } from 'react';
import classes from './Search.module.css';

import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { Autocomplete, TextField } from '@mui/material';
import SearchWidget from './SearchWidget';

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
                <SearchWidget />
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