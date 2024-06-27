// Static import
import { get } from "lodash";
import React from "react";
import { Flex, Space, Image, Card } from "antd";
// Dynamic import
import "./index.scss";
import { DentistProps, Doctors } from "./type";
import constants from "../../../shared/constants/doctors.json";

const Dentist: React.FunctionComponent = (props: DentistProps) => {
    const { Meta } = Card;
    const doctors: Doctors[] = get(constants, "dentist");
    return (
        <div className="dentistContainer">
            <Flex gap="small" wrap justify="center">
                {
                    doctors.map((doctor: Doctors) => {
                        const { name, role, imageUrl } = doctor;
                        return (
                            <Space direction="vertical" wrap className="doctors">
                                <Image
                                    src={imageUrl}
                                    preview={false}
                                    alt={name}
                                    width={300}
                                    height={240}
                                    className="doctors-image"
                                />
                                <Card className="doctors-description">
                                    <Meta title={name} description={role} />
                                </Card>
                            </Space>
                        );
                    })
                }
            </Flex>
        </div>
    );
};

export default Dentist;