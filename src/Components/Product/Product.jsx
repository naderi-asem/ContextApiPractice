import P_Style from '../Product/P_Style.module.css';

const Product = ({ product, dispatch }) => {

    const { title, price, quantity, size } = product;

    return (
        <section className={P_Style.p_container} key={product.id} >
            <div>
                <h3>{title}</h3>
                <p>size: {size.map(s => <span>{s+" \t"} </span> )}</p>
                <p>price: <span>{price}</span> $</p>
            </div>
            <div>
                {product.quantity > 1
                    ? <button onClick={() => dispatch({ id: product.id, type: "decrement", value: -1 })}>decrement</button>
                    : <button onClick={() => dispatch({ id: product.id, type: "remove" })}>remove</button>
                }
                <span>{quantity}</span>
                <button onClick={() => dispatch({ id: product.id, type: "increment", value: 1 })}>increment</button>
                <button onClick={() => dispatch({ id: product.id })}>reset</button>
            </div>
        </section>
    );
}



export default Product;