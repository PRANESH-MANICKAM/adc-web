// Static import
import React from "react";
import { Row, Col } from "antd";
// Dynamic imports
import "./index.scss"
import HomeDetail from "./home-detail";
import homeBanner from "../../shared/assets/homeBanner.png";

const Home: React.FunctionComponent = () => {
    return (
        <Row className="homeContainer">
            <Col xs={{ span: 24 }} md={{ span: 12 }} className="homeLeft">
                <HomeDetail />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} className="homeRight">
                <img src={homeBanner} alt="homeBanner" />
            </Col>
        </Row>
    );
};

export default Home;