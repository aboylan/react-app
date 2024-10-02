import { useEffect, useState } from 'react';
import { listProduct } from '../services/ProductService';

export const ProductApp = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const result = listProduct();
        setProducts(result);
    }, []);

    return (
        <>
            <h1>Productos!</h1>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map( product => {
                        return (<tr key={product.name}>
                            <td>{ product.name}</td>
                            <td>{ product.description}</td>
                            <td>{ product.price}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    );

}