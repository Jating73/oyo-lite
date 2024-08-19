import Head from "next/head";
import { useRouter } from "next/router"
import { Fragment } from "react"

import MainWrapper from "@/components/MainWrapper";
import SideBar from "@/components/SideBar";

export default function CityHotelsPage(props) {

    const router = useRouter();
    const { city } = router.query;

    const pageTitle = `Hotels in ${city} - Find premium OYO Rooms in your budget`;
    const metaDescription = `Find budget hotels in ${city} on OYO. Enjoy comfort, convenience, and great value for your money. Rooms starting at ₹452.`

    return (
        <Fragment>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SideBar />
            <MainWrapper city={city} />
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