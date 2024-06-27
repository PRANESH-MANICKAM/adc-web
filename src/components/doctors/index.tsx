// Static imports
import { get } from "lodash";
import React from "react";
import { Row, Col, Typography } from "antd";
// Dynamic imports
import "./index.scss";
import Dentist from "./dentist";
import RequestForm from "./request";
import { DoctorsProps } from "./type";
import constants from "../../shared/constants/doctors.json";

const Doctors: React.FunctionComponent = (props: DoctorsProps) => {
    const { Title } = Typography;
    return (
        <div className="doctorsContainer">
            <Title level={1} className="title">{get(constants, "pageTitle")}</Title>
            <Row >
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Dentist />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <RequestForm />
                </Col>
            </Row>
        </div>
    );
};

export default Doctors;