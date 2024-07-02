// Static import
import React, { useEffect } from "react";
import { message } from "antd";
// Dynamic import
import { useDispatch } from "react-redux";
import useSelectors from "../hooks/useSelector";
import { triggerNotification } from "../../store/slices/notification";

let timeInterval: NodeJS.Timer | undefined;

const MessageWrapper = (
  Component: React.FunctionComponent
) => {
  const WrapComponent = (props: any) => {
    const [messageApi, contextHolder] = message.useMessage();
    const { type, content, enable } = useSelectors("notification");
    const dispatch = useDispatch();
    if (timeInterval) {
      clearInterval(timeInterval);
    }
    timeInterval = setInterval(() => {
      clearInterval(timeInterval);
      dispatch(triggerNotification({ type: "", content: "", enable: false }));
    }, 3000);
    useEffect(() => {
      if (enable) {
        messageApi.open({
          type,
          content,
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enable]);
    return (<>
      {contextHolder}
      <Component {...props} />
    </>)
  }
  return WrapComponent;
};

export default MessageWrapper;
