// Static imports
import { get } from "lodash"
import React from "react";
import { Row, Col, Typography } from "antd";
// Dynamic import
import "./index.scss";
import constants from "../../shared/constants/about.json";
import { AboutProps } from "./type";

const About: React.FunctionComponent = (props: AboutProps) => {

    const { Title, Paragraph } = Typography;

    return (
        <>
            <div className="about">
                <Row justify="center">
                    <Col xs={{ span: 24 }} md={{ span: 18 }} className="about-details">
                        <Title level={4} className="about-welcomeTitle">{get(constants, "title")}</Title>
                        <Paragraph
                            copyable={false}
                            className="about-bio"
                            ellipsis={true ? { rows: 3, expandable: true, symbol: 'Read More' } : false}
                        >
                            {get(constants, "bio")}
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default About;