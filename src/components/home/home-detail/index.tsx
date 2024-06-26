// Static import
import React from "react";
import { Typography, Flex, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
// Static import
import "./index.scss"
import constants from "../../../shared/constants/home.json";

const HomeDetail: React.FunctionComponent = () => {

    const { Title } = Typography;

    return (
        <div className="homeDetailContainer">
            <Flex gap="small" vertical align="center" justify="center">
                <Title className="detailText-heading">{constants.details.title}</Title>
                <address className="detailText-address">
                    {constants.address.street} <br />
                    {constants.address.landMark} <br />
                    {constants.address.area}
                </address>
                <Title className="detailText-quote">{constants.details.quote}</Title>
                <Button
                    shape="round"
                    icon={<PlusCircleOutlined />}
                    className="appointment"
                >
                    {constants.details.bookAppointment}
                </Button>
            </Flex>
        </div>
    );
};

export default HomeDetail;