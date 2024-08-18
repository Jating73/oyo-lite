import React from 'react';

import classes from './CityExplorer.module.css';
import Link from 'next/link';

const cities = [
    { name: 'Bangalore' },
    { name: 'Chennai' },
    { name: 'Delhi' },
    { name: 'Gurgaon' },
    { name: 'Hyderabad' },
    { name: 'Kolkata' },
    { name: 'Mumbai' },
    { name: 'Noida' },
    { name: 'Pune' }
];

export default function CityExplorer() {

    return (
        <div className={classes.cityListContainer}>
            <div className={classes.cityListWrapper}>
                {cities.map((city, index) => (
                    <div key={index} className={classes.cityItemWrapper}>
                        <Link className={classes.cityItem} href={`/hotels/${city.name}`}>
                            <div className={classes.cityData}>{city.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}