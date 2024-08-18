import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";

// Components
import Header from "@/components/Header";
import CityExplorer from "@/components/CityExplorer";
import Search from "@/components/Search";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>OYO Lite: India's Best Online Hotel Booking Site for Sanitized Stays</title>
        <meta name="description" content="Stay safe at Sanitised budget hotels in over 230 cities, each available with standardized AC Rooms, Breakfast, LED TV, Wi-Fi, and Hygienic Washrooms. Enjoy a pleasant day wherever you go with OYO." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CityExplorer />
      <Search />
      <Banner imageUrl={"https://assets.oyoroomscdn.com/cmsMedia/ed806cf5-6ed2-48f7-a1be-4d72f7d9b586.jpeg"} objectType="contain" />
      <Banner imageUrl={"https://assets.oyoroomscdn.com/cmsMedia/b4462e5e-fd6b-44e4-99d7-fc83767ed892.png"} objectType="contain" />
      <NewsLetter />
      <Footer />
    </Fragment>
  );
}
