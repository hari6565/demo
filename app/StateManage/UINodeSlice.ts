import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UINodeState {
  node: any;
  stateTrack: boolean;
  editComponents: [];
  topBarData: {};
}

const initialState: UINodeState = {
  node: "",
  stateTrack: false,
  editComponents: [],
  topBarData: { Brand: "..Logo", Items: ["home", "contact", "settings"] },
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
  },
});

export const { setNode, setStateTrack, setEditComponents, setTopBarData } =
  UINodeSlice.actions;

export default UINodeSlice.reducer;
