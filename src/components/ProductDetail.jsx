
export const ProductDetail = ( {product = {}} ) => {

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
        </tr>
    )
}