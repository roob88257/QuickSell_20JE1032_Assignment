import React from 'react';
import { useFilterContext } from '../context/filter_context';
import Cards from './Cards';
import Dashview from './Dashview';


const User = () => {
    const { filter_products, secondObj } = useFilterContext();
    console.log(filter_products, secondObj)

    const groupedByUserId = {};

    if (secondObj) {
        secondObj.forEach((user) => {
            groupedByUserId[user.id] = user.name;
        });
    }

    // console.log(groupedByUserId);

    const productsGroupedByUser = {};
    filter_products.forEach((product) => {
        const { userId } = product;
        if (!productsGroupedByUser[userId]) {
            productsGroupedByUser[userId] = [];
        }
        productsGroupedByUser[userId].push(product);
    });

    const groupedData = Object.entries(productsGroupedByUser).map(([userId, products]) => {
        return {
            userId: userId,
            userName: groupedByUserId[userId],
            products: products,
        };
    });


    return (
        <div className='row'>
            {groupedData.map(({ userId, userName, products }) => (
                <div key={userId}>
                    <Dashview selectedData={userName} length={products.length} />
                    <div className='col'>
                        {products.map((product) => (
                            <Cards key={product.id}{...product} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default User;
