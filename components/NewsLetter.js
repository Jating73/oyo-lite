import { TextField } from '@mui/material'
import classes from './NewsLetter.module.css'

export default function NewsLetter() {
    return (
        <div className={classes.newsLetterContainer}>
            <div>
                <span></span>
                <div>
                    <div className={classes.text}>Get access to exclusive deals</div>
                    <div className={classes.subtext}>Only the best deals reach your inbox</div>
                </div>
            </div>
            <div className={classes.emailContainer}>
                <div>
                    <TextField label="Your email" focused/>
                </div>
                <button className={classes.notify}>Notify me</button>
            </div>
        </div>
    )
}