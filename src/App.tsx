// Static imports
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
// Dynamic import
import Main from "./main";
import { Header } from "./components";

const App: React.FunctionComponent = () => {
    return (
        <>
            <Router>
                <Header />
                <Main />
                <Routes>
        
                </Routes>
            </Router>
        </>
    )
}

export default App;