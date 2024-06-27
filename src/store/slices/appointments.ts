import { createSlice } from "@reduxjs/toolkit";

interface Appointments {
  name: string;
  age: string;
  gender: string;
  phoneNumber: string;
  appointmentDate: string;
}

const initialState: Appointments = {
  name: "",
  age: "",
  gender: "",
  phoneNumber: "",
  appointmentDate: "",
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
});

export default appointmentSlice.reducer;
