/* eslint-disable jsx-a11y/iframe-has-title */
// Static import
import React from "react";
import { get } from "lodash";
import { Avatar, Divider, Flex, FloatButton, Space, Typography } from "antd";
//Dynamic import
import "./index.scss";
import { icons } from "../../shared/icons/index";
import constants from "../../shared/constants/contact.json";
import { ArrowUpOutlined } from "@ant-design/icons";

const Contact: React.FunctionComponent = () => {
    const { Paragraph, Title } = Typography;
    return (
        <>
            <section className="contactContainer">
                <Flex align="middle" justify="center" gap="large" wrap>
                    <Space className="contact" direction="vertical" align="center">
                        <Avatar src={get(icons, "location")} />
                        <address className="contact-address">
                            {get(constants, ["address", "street"])} <br />
                            {get(constants, ["address", "landMark"])} <br />
                            {get(constants, ["address", "area"])}
                        </address>
                        <Divider orientation="left" className="contact-divider">Follow us</Divider>
                        <Space size="middle">
                            <Avatar src={get(icons, "instagram")} />
                            <Avatar src={get(icons, "facebook")} />
                        </Space>
                    </Space>
                    <Space direction="vertical" className="branch" align="center">
                        <Paragraph className="branch-title">{get(constants, ["branch", "title"])}</Paragraph>
                        <Title level={4} className="branch-clinic">{get(constants, ["branch", "clinic", "name"])}</Title>
                        <Space direction="vertical" align="center">
                            <div className="branch-doctor">
                                {get(constants, ["branch", "clinic", "doctor"])}
                            </div>
                            <div className="branch-role">
                                {get(constants, ["branch", "clinic", "role"])}
                            </div>
                        </Space>
                        <address className="branch-address">
                            {get(constants, ["branch", "clinic", "address", "street"])} <br />
                            {get(constants, ["branch", "clinic", "address", "landMark"])} <br />
                            {get(constants, ["branch", "clinic", "address", "area"])}
                        </address>
                        <Paragraph className="branch-contact">{get(constants, ["branch", "clinic", "phone"])}</Paragraph>
                    </Space>
                    <div className="googleMap">
                        <iframe
                            src={get(constants, ["map", "url"])}
                            loading="lazy"
                        />
                    </div>
                </Flex>
            </section>
            <section className="copyRights">
                <Paragraph className="text">{get(constants, "rights")}</Paragraph>
            </section>
            <FloatButton.BackTop icon={<ArrowUpOutlined />} />
        </>
    );
}

export default Contact;