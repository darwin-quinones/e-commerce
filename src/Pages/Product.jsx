import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {

    const { all_product } = useContext(ShopContext)
    const { productId } = useParams()
    // retrieve a product
    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div>
            <Breadcrum product={ product } />
        </div>
    );
}

export default Product;
