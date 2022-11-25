
import { useEffect, useState } from "react";
import { create } from 'apisauce';
import UnComplete from "./UnComplete";
import Products from "./Products";

const Store = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        const api = create({
            baseURL: `https://dummyjson.com`,
            headers: {
              Accept: "application/json"
            }
        });
        
        api.get('/products').then(response => {
            setProducts(response.data.products)
        }).catch(err => console.log(err));   
    }, []);

    return (
        localStorage.getItem('is_complete') ? <Products products={products} /> : <UnComplete />
    );
}

export default Store;