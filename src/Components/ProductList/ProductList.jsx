import Product from "../Product/Product";
import { useProduct, useProductActions } from "../ProductProvider/ProductProvider";
import PLStyle from '../ProductList/PLStyle.module.css';

const ProductList = () => {

    const products = useProduct();
    const dispatch = useProductActions();
    
    return (
        <section className={PLStyle.pl_container}>
            {products.map(product => {
                return <Product
                    key={product.id}
                    product={product}
                    dispatch={dispatch}
                    // increment={incrementHandler}
                    // decrement={decrementHandler}
                    // reset={resetHandler}
                />
            })}
        </section>
    );
}

export default ProductList;