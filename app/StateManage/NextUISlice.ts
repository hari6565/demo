import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NextUIState {
  sideState:string,
  toggle:boolean,
  viewTable:boolean,
  table:boolean,
  preView:boolean,
  opacity:number,
}

const initialState: NextUIState = {
  sideState:"",
  toggle:false,
  viewTable:false,
  table:false,
  preView:false,
  opacity:100,
};

const NextUISlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    setState:(state,action: PayloadAction<string>)=>{
      state.sideState=action.payload
    }


    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    getName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    getServer: (state, action: PayloadAction<[]>) => {
      state.serverData = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, getName, getServer } =
  NextUISlice.actions;

export default NextUISlice.reducer;
