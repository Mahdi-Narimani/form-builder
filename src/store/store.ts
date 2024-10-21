import { configureStore } from "@reduxjs/toolkit";
import fieldsReducer from "./reducers/fieldes.reducer";

export const store = configureStore({
    reducer: {
        fields: fieldsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
