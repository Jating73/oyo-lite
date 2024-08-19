import { useState } from 'react';
import classes from './SideBar.module.css';

import { Stack, Slider } from '@mui/material';

import FilterWrapper from './FilterWrapper';
import FilterItem from './FilterItem';
import CheckBoxGroup from './CheckBoxGroup';

const marks = [
    {
        value: 452,
        label: '452',
    },
    {
        value: 2073,
        label: '2073',
    },
];

function valuetext(value) {
    return `${value}`
}

export default function SideBar() {

    const [price, setPrice] = useState([452, 2073])

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };

    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__header}>
                <div className={classes.sidebar__heading}>
                    <span>Filters</span>
                </div>
                <button className={classes.sidebar__button}>
                    Clear All
                </button>
            </div>
            <div className={classes.sidebar__filter}>
                <FilterWrapper>
                    <FilterItem>
                        <div className={classes.range_picker}>
                            <h4>Price</h4>
                            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                <Slider
                                    getAriaLabel={() => 'Price range'}
                                    value={price}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                />
                            </Stack>
                        </div>
                    </FilterItem>
                </FilterWrapper>
                <FilterWrapper>
                    <FilterItem>
                        <CheckBoxGroup data={collections} heading="Collections" />
                    </FilterItem>
                </FilterWrapper>
                <FilterWrapper>
                    <FilterItem>
                        <CheckBoxGroup data={categories} heading="Categories" />
                    </FilterItem>
                </FilterWrapper>
                <FilterWrapper>
                    <FilterItem>
                        <CheckBoxGroup data={accomodation} heading="Accomodation Type" />
                    </FilterItem>
                </FilterWrapper>
                <FilterWrapper>
                    <FilterItem>
                        <CheckBoxGroup data={facilities} heading="Hotel Facilities" />
                    </FilterItem>
                </FilterWrapper>
                <FilterWrapper>
                    <FilterItem>
                        <CheckBoxGroup data={features} heading="Check-in features" />
                    </FilterItem>
                </FilterWrapper>
            </div>
        </div>
    )
}

const collections = ['Family OYOs', 'For Group Travellers', 'Local IDs accepted', 'OYOs welcomes couples'];
const categories = ['OYO Rooms - Super affordable stays with essential amenities', 'Townhouse - Your friendly, premium neighbourhood hotel- Serviced by OYO', 'Flagship - Affordable hotels at Prime locations- Serviced by OYO', 'OYOX Design - Beautifully designed, private homes crafted for the traveller who craves comfort', 'Home - Villas and apartments with extra space and privacy', 'Capital O - Premium hotels with spacious rooms for business travellers & families', 'Collection O - A space for new-age travellers - Serviced by OYO', 'Spot On - Budget stay with Comfortable bed and Clean washroom'];
const accomodation = ['OYO Home', 'Hotel']
const facilities = ['Seating area', 'King Sized Bed', 'Queen Sized Bed', 'Mini Fridge', 'Hair Dryer']
const features = ['Pay at Hotel']