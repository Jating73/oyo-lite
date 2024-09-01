import Head from "next/head";
import { useRouter } from "next/router"
import { Fragment } from "react"

import MainWrapper from "@/components/MainWrapper";
import SideBar from "@/components/SideBar";

import { getHotelList } from "@/helpers/hotel-util";
import Header from "@/components/Header";

export default function CityHotelsPage(props) {
    const { city, hotels, showSearchBar } = props;

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
            <Header showSearchBar={showSearchBar} />
            <SideBar />
            <MainWrapper city={city} hotels={hotels} />
        </Fragment>
    )
}

export async function getServerSideProps(context) {

    const { city } = context.params;

    const hotels = await getHotelList(city)

    return {
        props: {
            hotels: hotels,
            city: city,
            showSearchBar: true
        }
    }
}