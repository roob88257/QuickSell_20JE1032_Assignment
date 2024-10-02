import { configureStore } from '@reduxjs/toolkit';
import Filter_Reducer from './reducer/Filter_Reducer';

const store = configureStore({
    reducer: {
        filter: Filter_Reducer,

    },
});

export default store;