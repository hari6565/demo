import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NextUIState {
  sideState: string;
  isExpand: boolean;
  isViewTable: boolean;
  isTableOpen: boolean;
  isPreView: boolean;
  opacity: number;
  workspaceSize: number;
  tableType: string;
  node: any;
  stateTrack: boolean;
  isPropsOpen: boolean;
  editComponents: [];
  topBarData: {};
}

const initialState: NextUIState = {
  sideState: "Elements",
  isExpand: true,
  isViewTable: false,
  isTableOpen: false,
  isPreView: true,
  opacity: 100,
  workspaceSize: 100,
  tableType: "normal",
  node: "",
  stateTrack: false,
  isPropsOpen: false,
  editComponents: [],
  topBarData: {},
};

const NextUISlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<string>) => {
      state.sideState = action.payload;
    },
    setExpand: (state) => {
      state.isExpand = !state.isExpand;
    },
    setViewTable: (state, action: PayloadAction<boolean>) => {
      state.isViewTable = action.payload;
    },
    setTableOpen: (state) => {
      state.isTableOpen = !state.isTableOpen;
    },
    setPreView: (state) => {
      state.isPreView = !state.isPreView;
    },
    setOpacity: (state, action: PayloadAction<number>) => {
      state.opacity = action.payload;
    },
    setWorkspaceSize: (state, action: PayloadAction<number>) => {
      state.workspaceSize = action.payload;
    },
    setTableType: (state, action: PayloadAction<string>) => {
      state.tableType = action.payload;
    },
    setNode: (state, action: PayloadAction<any>) => {
      state.node = action.payload;
    },
    setStateTrack: (state) => {
      state.stateTrack = !state.stateTrack;
    },
    setPropsOpen: (state) => {
      state.isPropsOpen = !state.isPropsOpen;
    },
    setEditComponents: (state, action: PayloadAction<[]>) => {
      state.editComponents = action.payload;
    },
    setTopBarData: (state, action: PayloadAction<{}>) => {
      state.topBarData = action.payload;
    },
  },
});

export const {
  setState,
  setExpand,
  setViewTable,
  setTableOpen,
  setPreView,
  setOpacity,
  setWorkspaceSize,
  setTableType,
  setNode,
  setStateTrack,
  setPropsOpen,
  setEditComponents,
  setTopBarData,
} = NextUISlice.actions;

export default NextUISlice.reducer;
