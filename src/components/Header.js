import React, { useState, useEffect } from 'react';
import { TiThList } from 'react-icons/ti';
import { HiChevronDown } from "react-icons/hi";
import '../App.css';
import { useFilterContext } from '../context/filter_context';

const Header = () => {
    const [displayOnClick, setDisplayOnClick] = useState(false);
    const { filter_products, grouping_value, sorting_value, getGroupValue, getSortValue, sortingProducts } = useFilterContext();

    const handleGroupingChange = (e) => {
        getGroupValue(e.target.value);
    };

    const handleSortingChange = (e) => {
        const val = getSortValue(e.target.value);
        sortingProducts(val)
    };

    // console.log(sorting_value)
    // console.log(grouping_value)

    useEffect(() => {
        // console.log("Filter Products:", filter_products);
    }, [filter_products]);

    return (
        <div>
            <div className="top-header" style={{ paddingLeft: '10px' }}>
                <div className="displayButton">
                    <button className="display-button" onClick={() => setDisplayOnClick(!displayOnClick)}>
                        <TiThList /> Display <HiChevronDown />
                    </button>
                    {displayOnClick && (
                        <div className="dropOnClick grouping-btn">
                            <div className="selectGroup groups">
                                <span>Grouping</span>
                                <select className="selectStyle" name="group" id="group" onChange={handleGroupingChange} value={grouping_value}>
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                            <div className="selectGroup groups">
                                <span>Ordering</span>
                                <select className="selectStyle" name="order" id="sort" onChange={handleSortingChange} value={sorting_value}>
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};
export default Header;
