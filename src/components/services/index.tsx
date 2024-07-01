// Static import
import React from "react";
import { get } from "lodash";
import { Typography, Flex, Card, Avatar, Space } from "antd";
// Dynamic import
import "./index.scss";
import { Contact, Service } from "./type";
import constants from "../../shared/constants/services.json";
import { icons } from "../../shared/icons/index";

const Services: React.FunctionComponent = () => {
    const { Title } = Typography;
    const { Meta } = Card;
    const services: Service[] = get(constants, "services");
    const contacts: Contact[] = get(constants, "contact");
    return (
        <>
            <section className="servicesContainer">
                <Title level={1} className="title">{get(constants, "title")}</Title>
                <Flex className="service" gap="middle" wrap justify="center">
                    {services.map((service: Service, index: number) => {
                        const { title, description, icon } = service;
                        return (
                            <Card className="service-template" key={index + title}>
                                <Meta
                                    avatar={<Avatar className="service-icon" src={get(icons, icon)} size="large" shape="square" />}
                                    title={<span className="service-title">{title}</span>}
                                    description={description}
                                />
                            </Card>
                        )
                    })}
                </Flex>
            </section>
            <section className="contactService">
                <Flex className="contact" justify="center" gap="middle" wrap>
                    {
                        contacts.map((contact: Contact, index: number) => {
                            const { type, content, icon } = contact;
                            return (
                                <Card className="contact-template" key={index + type}>
                                    <Space direction="vertical" size="middle">
                                        <Avatar src={get(icons, icon)} />
                                        <Meta
                                            title={type}
                                            description={
                                                content.map((item: string) => <><span>{item}</span><br /></>)
                                            }
                                        />
                                    </Space>
                                </Card>
                            );
                        })
                    }
                </Flex>
            </section>
        </>
    )
}

export default Services;