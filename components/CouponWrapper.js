import { Discount } from '@mui/icons-material'
import classes from './CouponWrapper.module.css'

export default function CouponWrapper() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.icon}>
                <Discount fontSize='small' color='warning'/>
            </div>
            <div className={classes.text}>
                <span>
                    upto 80% off. Valid until 19th Aug 2024.
                </span>
            </div>
        </div>
    )
}