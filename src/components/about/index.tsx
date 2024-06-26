// Static imports
import React from "react";
import { Row, Col, Typography } from "antd";
// Dynamic import
import "./index.scss";
import constants from "../../shared/constants/about.json";

const About: React.FunctionComponent = () => {

    const { Title, Paragraph } = Typography;

    return (
        <>
            <div className="about">
                <Row justify="center">
                    <Col xs={{ span: 24 }} md={{ span: 18 }} className="about-details">
                        <Title level={4} className="about-welcomeTitle">{constants.title}</Title>
                        <Paragraph copyable={false} className="about-bio" ellipsis={true ? { rows: 3, expandable: true, symbol: 'Read More' } : false}>
                            {constants.bio}
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default About;