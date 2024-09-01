import HotelItem from './HotelItem';
import classes from './HotelListWrapper.module.css';

export default function HotelListWrapper({ hotels = [] }) {
    return (
        <div className={classes.list__wrapper}>
            {hotels.map((hotel) => {
                return (
                    <HotelItem hotel={hotel} key={hotel.id} />
                )
            })}
        </div>
    )
}