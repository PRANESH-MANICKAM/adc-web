// Static import
import { get } from "lodash";
import React from "react";
import { Typography, Flex, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
// Static import
import "./index.scss"
import { HomeDetailsProps } from "./type";
import constants from "../../../shared/constants/home.json";

const HomeDetail: React.FunctionComponent = (props: HomeDetailsProps) => {

    const { Title } = Typography;

    return (
        <div className="homeDetailContainer">
            <Flex gap="small" vertical align="center" justify="center">
                <Title className="detailText-heading">{get(constants, ["details", "title"])}</Title>
                <address className="detailText-address">
                    {get(constants, ["address", "street"])} <br />
                    {get(constants, ["address", "landMark"])} <br />
                    {get(constants, ["address", "area"])}
                </address>
                <Title className="detailText-quote">{get(constants, ["details", "quote"])}</Title>
                <Button
                    shape="round"
                    icon={<PlusCircleOutlined />}
                    className="appointment"
                >
                    {get(constants, ["details", "bookAppointment"])}
                </Button>
            </Flex>
        </div>
    );
};

export default HomeDetail;