// Static imports
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
// Dynamic import
import Main from "./main";
import { Header } from "./components";
import MessageWrapper from "./customs/hoc/message-wrapper";

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

export default MessageWrapper(App);