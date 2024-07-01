// Static import
import React from "react";
// Dynamic import
import { About, Doctors, Home, Services } from "./components";

const Main: React.FunctionComponent = () => {
    return (
        <>
            <Home />
            <About />
            <Doctors />
            <Services />
        </>
    );
};

export default Main;
