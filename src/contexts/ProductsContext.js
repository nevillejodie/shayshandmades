import React, { createContext, useState } from 'react';
import { ProductList } from '../services/dummy';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [products] = useState(ProductList);

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;