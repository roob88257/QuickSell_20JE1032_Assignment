import React from 'react';
import { useFilterContext } from '../context/filter_context';
import Cards from './Cards';
import Dashview from './Dashview';

const Status = () => {
    const { filter_products } = useFilterContext();

    const groupedByPriority = filter_products.reduce((acc, cur) => {
        if (!acc[cur.priority]) {
            acc[cur.priority] = [];
        }
        acc[cur.priority].push(cur);
        return acc;
    }, {});

    const priorityData = Object.entries(groupedByPriority).map(([priority]) => {
        return {
            priority: priority === '0' ? 'No priority' :
                priority === '1' ? 'Low' :
                    priority === '2' ? 'Medium' :
                        priority === '3' ? 'High' :
                            priority === '4' ? 'Urgent' : priority,
        };
    });


    return (
        <div className='row'>
            {Object.entries(groupedByPriority).map(([priority, products]) => (
                <div key={priority}>
                    <Dashview selectedData={priorityData[priority].priority} length={products.length} />
                    <div className='col'>
                        {products.map((product) => (
                            <Cards key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Status;
