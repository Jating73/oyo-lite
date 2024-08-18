import { useRouter } from "next/router"
import { Fragment } from "react"

export default function CityHotelsPage(props) {

    const router = useRouter();
    const { city } = router.query;

    return (
        <Fragment>


        </Fragment>
    )
}

// export function getServerSideProps(context) {

//     const { params } = context;

//     const cityName = params.slug;

//     return {
//         props: {

//         }
//     }
// }