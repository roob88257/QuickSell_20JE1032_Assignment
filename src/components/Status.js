import React from 'react';
import { useFilterContext } from '../context/filter_context';
import Cards from './Cards';
import "../App.css"
import Dashview from './Dashview';

const Status = () => {
    const { filter_products } = useFilterContext();

    const groupedByStatus = filter_products.reduce((acc, cur) => {
        if (!acc[cur.status]) {
            acc[cur.status] = [];
        }
        acc[cur.status].push(cur);
        return acc;
    }, {});

    return (
        <div className='row'>
            {Object.entries(groupedByStatus).map(([status, products]) => (
                <div key={status}>
                    <Dashview selectedData={status} length={products.length} />
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
