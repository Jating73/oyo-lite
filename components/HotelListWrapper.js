import HotelItem from './HotelItem';
import classes from './HotelListWrapper.module.css';

export default function HotelListWrapper() {
    return (
        <div className={classes.list__wrapper}>
            <HotelItem />
        </div>
    )
}