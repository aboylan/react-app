import { useEffect, useState } from 'react';
import { listProduct } from '../services/ProductService';
import { ProductGrid } from './ProductGrid';
import PropTypes from 'prop-types';
import { ProductForm } from './ProductForm';

export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        name: '',
        description: '',
        price: ''
    });

    useEffect(() => {
        const result = listProduct();
        setProducts(result);
    }, []);

    const handlerAddProduct = (product) => {
        console.log(product);
        setProducts([...products, { ...product }]);
    };

    const handlerRemoveProduct = (name) => {
        console.log(name);
        setProducts(products.filter(product => product.name != name));
    };

    const handlerProductSelected = (product) => {
        setProductSelected({ ...product });
    };

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <div>
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
                </div>
                <div>
                    <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerProductSelected={handlerProductSelected} />
                </div>
            </div>
        </div>
    );

}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}