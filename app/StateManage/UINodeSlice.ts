import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UINodeState {
  node: any;
  stateTrack: boolean;
  editComponents: [];
  topBarData: {};
  AppNVersion: {};
}

const initialState: UINodeState = {
  node: "",
  stateTrack: false,
  editComponents: [],
  topBarData: { Brand: "..Logo", Items: ["home", "contact", "settings"] },
  AppNVersion: { appName: "text1", Version: "v1" },
};

const UINodeSlice = createSlice({
  name: "UF",
  initialState,
  reducers: {
    setNode: (state, action: PayloadAction<any>) => {
      state.node = action.payload;
    },
    setStateTrack: (state) => {
      state.stateTrack = !state.stateTrack;
    },

    setEditComponents: (state, action: PayloadAction<[]>) => {
      state.editComponents = action.payload;
    },
    setTopBarData: (state, action: PayloadAction<{}>) => {
      state.topBarData = action.payload;
    },
    setAppName: (state, action: PayloadAction<{}>) => {
      state.AppNVersion = { ...state.AppNVersion, appName: action.payload };
    },
    setVersionName: (state, action: PayloadAction<{}>) => {
      state.AppNVersion = { ...state.AppNVersion, Version: action.payload };
    },
    setAppAndVersion: (state, action: PayloadAction<{}>) => {
      state.AppNVersion = { ...state.AppNVersion, ...action.payload };
    },
  },
});

export const {
  setNode,
  setStateTrack,
  setEditComponents,
  setTopBarData,
  setAppAndVersion,
} = UINodeSlice.actions;

export default UINodeSlice.reducer;
