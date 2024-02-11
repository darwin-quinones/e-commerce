import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import DescriptionBox from '../Components/DiscriptionBox/DescriptionBox';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {

    const { all_product } = useContext(ShopContext)
    const { productId } = useParams()
    // retrieve a product
    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div>
            <Breadcrum product={ product } />
            <ProductDisplay product={ product } />
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
}

export default Product;
