import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface SidebarState {
  sidebarOn: boolean
}

// Define the initial state using that type
const initialState: SidebarState = {
  sidebarOn: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
        state.sidebarOn = true
    },
    closeSidebar: (state) => {
        state.sidebarOn = false
    },
    toggleSidebar: (state) => {
        state.sidebarOn = !state.sidebarOn
    }
  },
})

export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer