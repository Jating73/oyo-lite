import React from 'react';
import classes from './FilterWrapper.module.css'; // Assuming your styles are in a CSS module

export default function FilterWrapper({ children }) {
    return (
        <div className={classes.filter__wrapper}>
            {children}
        </div>
    );
};