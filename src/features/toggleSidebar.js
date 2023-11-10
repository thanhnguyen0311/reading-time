import {createSlice} from "@reduxjs/toolkit";

const toggleSidebar = createSlice({
    name: 'openSidebar',
    initialState: {
        isOn: false,
      },
    reducers: {
        toggleSidebarButton: (state) => {
        state.isOn = !state.isOn;
      },
    },
  });

export const { toggleSidebarButton } = toggleSidebar.actions;

export default toggleSidebar;