import Image from 'next/image'
import classes from './Banner.module.css'

export default function Banner({ imageUrl }) {
    return (
        <div className={classes.bannerContainer}>
            <div className={classes.bannerContainer__image}>
                <Image
                    src={imageUrl ? imageUrl : "https://assets.oyoroomscdn.com/cmsMedia/b4462e5e-fd6b-44e4-99d7-fc83767ed892.png"}
                    alt='Banner'
                    layout='fill'
                    objectFit='contain'
                    priority
                />
            </div>
        </div>
    )
}