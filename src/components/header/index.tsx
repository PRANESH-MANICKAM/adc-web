// Static import
import React from "react";
import { PhoneFilled } from "@ant-design/icons";
import { Layout, Typography, Button } from "antd";
// Dynamic import
import "./index.scss";
import constants from "../../shared/constants/header.json";

const Header: React.FunctionComponent = () => {
    const { Header } = Layout;
    const { Title } = Typography;

    const handleCall = (): void => { }

    return (
        <Header className="headerContainer">
            <div className="logoContainer">
                <Title level={5} className="logo">{constants.title}</Title>
                <Title level={5} className="logo">{constants.type}</Title>
            </div>
            <div className="headerDetails">
                <Button
                    shape="round"
                    className="contactButton"
                    icon={<PhoneFilled rotate={90} />}
                    onClick={handleCall}
                >
                    {constants.phoneNumber}
                </Button>
            </div>
        </Header>
    );
}

export default Header;