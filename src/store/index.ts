// Static import
import { Store, configureStore } from "@reduxjs/toolkit";
// Dynamic import
import appointmentReducer from "./slices/appointments";
import notificationReducer from "./slices/notification";

export const store: Store = configureStore({
  reducer: {
    appointments: appointmentReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
