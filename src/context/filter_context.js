import { createContext, useContext, useReducer, useEffect } from "react";
import Filter_Reducer from "../reducer/Filter_Reducer";
import { useProductContext } from "./productcontext";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    secondObj: [],
    sorting_value: "priority",
    grouping_value: "status"
};

export const FilterContextProvider = ({ children }) => {
    const [users, secondData] = useProductContext();
    // console.log(secondData);
    // console.log(users)
    const [state, dispatch] = useReducer(Filter_Reducer, initialState);

    // Action creators
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: users });
        dispatch({ type: "LOAD_SECOND_DATA", payload: secondData });
    }, [users, secondData]);


    const getSortValue = (payload) => {
        dispatch({ type: "GET_SORT_VALUE", payload });
    };

    const sortingProducts = () => {
        dispatch({ type: "SORTING_PRODUCTS" });
    };

    const getGroupValue = (payload) => {
        dispatch({ type: "GET_GROUP_VALUE", payload });
    };

    return (
        <FilterContext.Provider
            value={{
                ...state,
                getSortValue,
                sortingProducts,
                getGroupValue
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
};

export { useFilterContext };
