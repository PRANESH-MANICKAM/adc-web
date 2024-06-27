// Static import
import { get } from "lodash";
import React from "react";
import { Card, Form, Input, Button } from "antd";
// Dynamic import
import "./index.scss";
import { CheckOutlined } from "@ant-design/icons";
import constants from "../../../shared/constants/doctors.json";
import { RequestFormProps, requestFormValues } from "./type";

const RequestForm: React.FunctionComponent = (props: RequestFormProps) => {
    const { Item } = Form;

    const onRequest = (values: requestFormValues): void => { };

    return (
        <div className="requestFormContainer">
            <Card title={get(constants, ["request", "title"])} className="request">
                <Form name="requestForm" onFinish={onRequest} layout="vertical" >
                    <Item label="Name" name="name" rules={[{ required: true, message: "" }]}>
                        <Input placeholder="Enter Name" className="request-field" size="large" />
                    </Item>
                    <Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: "" }]}>
                        <Input placeholder="Enter Phone Number" type="number" className="request-field" size="large" />
                    </Item>
                    <Item>
                        <Button
                            shape="round"
                            size="large"
                            htmlType="submit"
                            icon={<CheckOutlined />}
                            className="request-submit"
                        >
                            {get(constants, ["request", "submit"])}
                        </Button>
                    </Item>
                </Form>
            </Card >
        </div>
    );
};

export default RequestForm;