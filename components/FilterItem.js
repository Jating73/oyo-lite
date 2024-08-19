import React from 'react';
import classes from './FilterItem.module.css'; // Assuming your styles are in a CSS module

export default function FilterItem({ children }) {
    return (
        <div className={classes.filter__item}>
            {children}
        </div>
    );
};