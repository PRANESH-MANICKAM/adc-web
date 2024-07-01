// Static import
import React from "react";
// Dynamic import
import { About, Doctors, Home, Reviews, Services } from "./components";

const Main: React.FunctionComponent = () => {
    return (
        <>
            <Home />
            <About />
            <Doctors />
            <Services />
            <Reviews />
        </>
    );
};

export default Main;
