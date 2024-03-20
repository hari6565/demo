import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UINodeState {
  allNode: any[];
  stateTrack: boolean;
  editComponents: {};
  topBarData: {};
  AppNVersion: {};
  NodeNavBar: {};
}

const initialState: UINodeState = {
  allNode: [],
  stateTrack: false,
  editComponents: {},
  topBarData: { Brand: "..Logo", Items: ["home", "contact", "settings"] },
  AppNVersion: { appName: "text1", Version: "v1" },
  NodeNavBar: {},
};

const UINodeSlice = createSlice({
  name: "UF",
  initialState,
  reducers: {
    setNode: (state, action: PayloadAction<any[]>) => {
      state.allNode = action.payload;
    },
    setStateTrack: (state) => {
      state.stateTrack = !state.stateTrack;
    },

    setEditComponents: (state, action: PayloadAction<{}>) => {
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
    setNodeNavBar: (state, action: PayloadAction<{}>) => {
      state.NodeNavBar = action.payload;
    },
  },
});

export const {
  setNode,
  setStateTrack,
  setEditComponents,
  setTopBarData,
  setAppAndVersion,
  setNodeNavBar,
} = UINodeSlice.actions;

export default UINodeSlice.reducer;
