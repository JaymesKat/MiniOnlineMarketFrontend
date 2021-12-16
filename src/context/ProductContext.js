import { createContext, useState } from "react";

const ProductContext = createContext([{}, () => {}]);

const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
}

export { ProductContext, ProductProvider };