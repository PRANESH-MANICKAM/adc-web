// Static import
import React from "react";
// Dynamic import
import { About, Doctors, Home } from "./components";

const Main: React.FunctionComponent = () => {
    return (
        <>
            <Home />
            <About />
            <Doctors />
        </>
    );
};

export default Main;
