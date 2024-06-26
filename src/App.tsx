// Static imports
import React from "react";
// Dynamic import
import { Header, Home, About, Doctors } from "./components";

const App: React.FunctionComponent = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Doctors />
        </>
    )
}

export default App;