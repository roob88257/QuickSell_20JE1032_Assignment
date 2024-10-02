import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [secondData, setSecondData] = useState([]);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then((res) => {
                setUsers(res.data.tickets)
                setSecondData(res.data.users);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    // console.log(secondData);
    // console.log(users)

    return (
        <AppContext.Provider value={[users, secondData]}>
            {children}
        </AppContext.Provider>
    );
};

// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };