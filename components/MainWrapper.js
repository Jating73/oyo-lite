import Link from 'next/link';
import classes from './MainWrapper.module.css'

import { Breadcrumbs, Switch, Typography, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';
import { useState } from 'react';
import CouponWrapper from './CouponWrapper';
import HotelListWrapper from './HotelListWrapper';

export default function MainWrapper({ city, totalHotels = 100, hotels = [] }) {

    const [type, setType] = useState('popularity')

    const breadcrumbs = [
        <Link href={'/'} key="home">
            Home
        </Link>,
        <Typography key="hotels-in-city" color="text.primary">
            Hotels in {city}
        </Typography>
    ];

    const switchLabel = { inputProps: { 'aria-label': 'Map View' } };

    const handleChange = (event) => {
        setType(event.target.value)
    }

    return (
        <section className={classes.list__content}>
            <div className={classes.list__contentWrapper}>
                <div className={classes.list__contentHeader}>
                    <div className={classes.list__breadCrumbs}>
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                    <div className={classes.list__heading}>
                        <span>
                            <h1>Hotels in {city} ({totalHotels} OYOs)</h1>
                        </span>
                        <div className={classes.mapToggle}>
                            <span>Map View</span>
                            <Switch {...switchLabel} color='primary' />
                        </div>
                        <div>
                            <Box sx={{ minWidth: 200 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="sort-by-select-label">Sort By</InputLabel>
                                    <Select
                                        labelId="sort-by-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="Sort By"
                                        onChange={handleChange}
                                        autoWidth
                                    >
                                        <MenuItem value={'popularity'}>Popularity</MenuItem>
                                        <MenuItem value={'ratings'}>Guest Ratings</MenuItem>
                                        <MenuItem value={'low-to-high-price'}>Price Low to High</MenuItem>
                                        <MenuItem value={'high-to-low-price'}>Price High to Low</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    <div className={classes.list__divider}></div>
                    <div className={classes.list__banner}>
                        <div className={classes.banner__section}>
                            <CouponWrapper />
                        </div>
                    </div>
                </div>
                <HotelListWrapper hotels={hotels} />
            </div>
        </section>
    )
}