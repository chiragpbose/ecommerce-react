import React from "react";
import styled from "styled-components";
import FeatureProducts from "./components/FeatureProducts";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
export default function Home() {
    const data = {
        name: "chirag store",
    };
    return (
        <>
            <HeroSection myData={data} />
            <FeatureProducts />
            <Services />
            <Trusted />
        </>
    );
}
