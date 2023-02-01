import React from "react";
import { dbProducts } from '../../db/DataBase';

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const initialState = dbProducts;

const reducer = (products, action) => {

    const setState = (id) => {
        if (action.type === "remove") {
            const filteredProducts = products.filter(p => p.id !== id);
            return filteredProducts;
        }
        const selectedIndex = products.findIndex(p => p.id === id);
        const selectedProduct = { ...products[selectedIndex] };
        if (!action.type)
            selectedProduct.quantity = 1;
        else
            selectedProduct.quantity = selectedProduct.quantity + action.value;
        const updatedProducts = [...products];
        updatedProducts[selectedIndex] = selectedProduct;
        if (selectedProduct.quantity > 0)
            return updatedProducts;
        return products;
    };


    switch (action.type) {
        case "increment":
            return setState(action.id);
        case "decrement":
            return setState(action.id);
        case "remove":
            return setState(action.id);
        case "filter": {
            // const sizeValue = action.event.target.value;
            // if (!sizeValue)
            //     return initialState;
            // return initialState.filter(p => p.size.includes(sizeValue));
            const sizeValue = action.filteredOption.value;
            if (!sizeValue) {
                return initialState;
            }
            return initialState.filter(p => p.size.indexOf(sizeValue) >= 0);
        }
        case "sort": {
            console.log("sort action: ", action.sortedOption);
            const sortValue = action.sortedOption.value;
            let sortedProducts = [...products];
            if (sortValue === "ascending") {
                return sortedProducts.sort((a, b) => {
                    return a.price - b.price;
                });
            } else if (sortValue === "descending") {
                return sortedProducts.sort((a, b) => {
                    return b.price - a.price;
                });
            }
            return initialState.filter(p => sortedProducts.includes(p));           
            // return sortedProducts;
        }
        case "search": {
            console.log("search action: ", action);
            return products.filter(p => {
                
                return p.title.toLowerCase().includes(action.searched.toLowerCase());
            });
        }
        default: return setState(action.id);
    }
}


const ProductProvider = ({ children }) => {

    // const [products, setProducts] = React.useState([
    //     { title: "react", price: 1500, id: 1, quantity: 1 },
    //     { title: "javascript", price: 1000, id: 2, quantity: 1 },
    //     { title: "vue js", price: 1200, id: 3, quantity: 1 }
    // ]);

    const [products, dispatch] = React.useReducer(reducer, initialState);

    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    );
}

export default ProductProvider;

export const useProduct = () => React.useContext(ProductContext);
export const useProductActions = () => {

    const dispatch = React.useContext(ProductContextDispatcher);


    // const setState = (id, number) => {
    //     dispatch(prevProducts => {
    //         const selectedProduct = { ...prevProducts.find(p => p.id === id) };
    //         selectedProduct.quantity = selectedProduct.quantity + number;
    //         const products = [...prevProducts];
    //         const updatedIndex = products.findIndex(p => p.id === id);
    //         products[updatedIndex] = selectedProduct;
    //         if (products[updatedIndex].quantity > 0)
    //             return products;
    //         return prevProducts;
    //     });

    // }

    // const incrementHandler = (id) => {
    // setProducts(prevProducts => {
    //     const selectedProduct = { ...prevProducts.find(p => p.id === id) };
    //     selectedProduct.quantity = selectedProduct.quantity + 1;
    //     const products = [...prevProducts];
    //     const updatedIndex = products.findIndex(p => p.id === id);
    //     products[updatedIndex] = selectedProduct;
    //     return products;
    // });
    //     setState(id, 1)
    // }

    // const decrementHandler = (id) => {
    //     setState(id, -1);
    // }

    // const resetHandler = (product) => {
    //     dispatch(prevProduct => {
    //         const selectedIndex = prevProduct.findIndex(p => p.id === product.id);
    //         const UpdatedProducts = [...prevProduct];
    //         UpdatedProducts[selectedIndex].quantity = 1;
    //         console.log("reset products: ", UpdatedProducts);
    //         return UpdatedProducts;
    //     });
    // }

    // return { incrementHandler, decrementHandler, resetHandler };

    return dispatch;

};