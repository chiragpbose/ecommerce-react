import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

export default function About() {
    const { myName } = useProductContext();
    const data = {
        name: "chirag ecommerce",
    };
    return (
        <>
            {myName}
            <HeroSection myData={data} />;
        </>
    );
}
