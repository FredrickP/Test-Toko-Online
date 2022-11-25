import { useEffect, useState } from "react";

const Products = (props) => {

    const [cart, setCart] = useState({});

    useEffect(() => {
        const cartData = localStorage.getItem('list_on_cart');
        if (cartData != null) {
            setCart(JSON.parse(cartData));
        }
    });

    const addToCart = (item) => {
        let itemId = item.title.toLowerCase().replaceAll(' ', '-');
        
        cart[itemId] = item;
        cart[itemId]["quantity"] = 1;
        localStorage.setItem('list_on_cart', JSON.stringify(cart));
    }

    const removeFromCart = (itemId) => {
        delete cart[itemId];
        localStorage.setItem('list_on_cart', JSON.stringify(cart));
    }

    const existOnCart = (itemId) => {
        return cart[itemId] != undefined;
    }

    const renderProducts = (products) => {
        const productItems = [];
        products.forEach((product, i) => {
            const itemId = product.title.toLowerCase().replaceAll(' ', '-');
            const exists = existOnCart(itemId);
            productItems.push(
                <div className="col-5-sm app-product-item">
                    <div className="card full-width">
                        <img src={product.thumbnail} className="thumbnail"/>
                        <div className="title">{product.title}</div>
                        <div className="price">{`$ ${product.price}`}</div>
                        <div className={`button primary ${exists ? '' : 'outline'} full-width button-add-product`} onClick={(evt) => {
                            exists ? removeFromCart(itemId) : addToCart(product)
                        }}>{exists ? 'Remove' : 'Add'}</div>
                    </div>
                </div>
            );
        });

        return productItems;
    }

    return(
        props.products && props.products.length > 0 ? <div className="row app-product-list full-width">{renderProducts(props.products)}</div> : <div className="absolute-full-screen center"><div className="loader"></div></div>
    )
}

export default Products;