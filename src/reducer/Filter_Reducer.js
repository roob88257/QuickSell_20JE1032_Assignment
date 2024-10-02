const initialState = {
    filter_products: [],
    secondObj: [],
    sorting_value: "priority",
    grouping_value: "status"
};

const Filter_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
            };
        case "LOAD_SECOND_DATA":
            return {
                ...state,
                secondObj: [...action.payload],
            };
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            };


        case "SORTING_PRODUCTS":
            const { filter_products, sorting_value, grouping_value, } = state;
            let tempSortProduct = [...filter_products];
            let newSortData;

            if (grouping_value === "status") {
                const sortedProducts = {};
                tempSortProduct.forEach((product) => {
                    if (!sortedProducts[product.status]) {
                        sortedProducts[product.status] = [product];
                    } else {
                        sortedProducts[product.status].push(product);
                    }
                });

                Object.keys(sortedProducts).forEach((key) => {
                    if (sorting_value === "priority") {
                        sortedProducts[key].sort((a, b) => a.priority - b.priority);
                    } else if (sorting_value === "title") {
                        sortedProducts[key].sort((a, b) => a.title.localeCompare(b.title));
                    }
                });

                newSortData = Object.values(sortedProducts).flat();
            }
            else if (grouping_value === "user") {
                const sortedProductsByUser = {};
                tempSortProduct.forEach((product) => {
                    if (!sortedProductsByUser[product.userId]) {
                        sortedProductsByUser[product.userId] = [product];
                    } else {
                        sortedProductsByUser[product.userId].push(product);
                    }
                });

                Object.keys(sortedProductsByUser).forEach((key) => {
                    if (sorting_value === "priority") {
                        sortedProductsByUser[key].sort((a, b) => b.priority - a.priority);
                    } else if (sorting_value === "title") {
                        sortedProductsByUser[key].sort((a, b) => a.title.localeCompare(b.title));
                    }
                });

                newSortData = Object.values(sortedProductsByUser).flat();
            }
            else if (grouping_value === "priority") {

                const priorityMap = {};
                tempSortProduct.forEach((product) => {
                    if (!priorityMap[product.priority]) {
                        priorityMap[product.priority] = [product];
                    } else {
                        priorityMap[product.priority].push(product);
                    }
                });

                Object.keys(priorityMap).forEach((key) => {
                    priorityMap[key].sort((a, b) => a.title.localeCompare(b.title));
                });

                newSortData = Object.values(priorityMap).flat();
            }

            return {
                ...state,
                filter_products: newSortData,
            };


        case "GET_GROUP_VALUE":
            return {
                ...state,
                grouping_value: action.payload,
            };
        default:
            return state;
    }
};

export default Filter_Reducer;
