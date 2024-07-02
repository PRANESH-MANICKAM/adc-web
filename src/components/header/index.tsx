// Static import
import { get } from "lodash";
import { PhoneFilled } from "@ant-design/icons";
import { Layout, Typography, Button } from "antd";
import React, { MouseEventHandler } from "react";
// Dynamic import
import "./index.scss";
import { HeaderProps } from "./type";
import { useDispatch } from "react-redux";
import constants from "../../shared/constants/header.json";
import messages from "../../shared/constants/notification.json";
import { triggerNotification } from "../../store/slices/notification";
import { getDevicePlatform, getWindow } from "../../shared/environment";

const Header: React.FunctionComponent = (props: HeaderProps) => {
    const { Header } = Layout;
    const { Title } = Typography;
    const dispatch = useDispatch();

    const handleCall: MouseEventHandler<HTMLElement> = () => {
        const device = getDevicePlatform();
        if (["Android", "iOS"].includes(device)) {
            console.log("device")
            return getWindow().location.href = `tel:${get(constants, "phoneNumber")}`;
        }
        dispatch(triggerNotification({
            type: "warning",
            content: get(messages, ["warning", "callFeature"]),
            enable: true
        }))
    };

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