// Static import
import { get } from "lodash";
import { PhoneFilled } from "@ant-design/icons";
import { Layout, Typography, Button } from "antd";
import React, { MouseEventHandler } from "react";
// Dynamic import
import "./index.scss";
import { HeaderProps } from "./type";
import constants from "../../shared/constants/header.json";

const Header: React.FunctionComponent = (props: HeaderProps) => {
    const { Header } = Layout;
    const { Title } = Typography;

    const handleCall: MouseEventHandler<HTMLElement> = (): void => { }

    return (
        <Header className="headerContainer">
            <div className="logoContainer">
                <Title level={5} className="logo">{get(constants, "title")}</Title>
                <Title level={5} className="logo">{get(constants, "type")}</Title>
            </div>
            <div className="headerDetails">
                <Button
                    shape="round"
                    className="contactButton"
                    icon={<PhoneFilled rotate={90} />}
                    onClick={handleCall}
                >
                    {get(constants, "phoneNumber")}
                </Button>
            </div>
        </Header>
    );
}

export default Header;