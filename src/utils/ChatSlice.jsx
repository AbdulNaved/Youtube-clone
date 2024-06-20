import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        setMessage: (state, action) => {
            if (state.messages.length >= 100) {
                state.messages.shift(); // Ensure we don't have more than 100 messages
            }
            state.messages.push(action.payload);
        }
    }
});

export const { setMessage } = chatSlice.actions;
export default chatSlice.reducer; 

