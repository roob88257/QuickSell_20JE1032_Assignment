import React from 'react'
import { useFilterContext } from '../context/filter_context';
import User from './User';
import Status from './Status';
import Priority from './Priority';

const CardSection = () => {

    const { grouping_value } = useFilterContext();
    return (
        <div>
            {grouping_value === "user" &&
                <User />}
            {grouping_value === "status" &&
                <Status />}
            {grouping_value === "priority" &&
                <Priority />}
        </div>
    )
}

export default CardSection
