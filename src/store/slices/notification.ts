// Static import

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface Notification {
  type: "success" | "error" | "warning" | "";
  content: string;
  enable: boolean;
}

const initialState: Notification = {
  type: "",
  content: "",
  enable: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    triggerNotification: (
      state: RootState,
      action: PayloadAction<Notification>
    ) => {
      return {
        ...state,
        type: action.payload.type,
        content: action.payload.content,
        enable: action.payload.enable,
      };
    },
  },
});

export const { triggerNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
