import { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import UnComplete from "./UnComplete";

const ShopingCart = () => {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState({});
    const [success, setSuccess] = useState(false);

    const editQuantity = (itemId, editMode) => {
        const cartData = localStorage.getItem('list_on_cart');
        if (cartData != null) {
            const cart = JSON.parse(cartData);
            const quantity = cart[itemId]['quantity'];
            if (editMode == 'increase'){
                cart[itemId]['quantity'] = quantity + 1;
            }else if (editMode == 'decrease'){
                cart[itemId]['quantity'] = quantity - 1;
            }
            localStorage.setItem('list_on_cart', JSON.stringify(cart));
        }
    }

    const puchaseList = () => {
        const purcashe = [];
        Object.keys(products).forEach((productId, i) => {
            purcashe.push(
                <div className="full-width purchase-item">
                    <div className="is-left">{products[productId].title}</div>
                    <div className="is-right">{products[productId].quantity}</div>
                </div>
            );
        });

        return purcashe;
    }

    const renderCart = () => {
        const carts = [];
        Object.keys(products).forEach((itemId, i) => {
            const product = products[itemId];
            carts.push(
                <div className="app-cart-item nowrap">
                    <img src={product.thumbnail} className="image"></img>
                    <div className="app-cart-item-info auto-width">
                        <div className="title">
                            {product.title}
                        </div>
                        <div className="price">
                            {`$ ${product.price}`}
                        </div>
                    </div>
                    <div className="total-cart nowrap">
                        <div className={`button ${product.quantity <= 1 ? 'disable' : 'primary'} circle outline decrease-quantity`} onClick={(evt) => {
                            if(product.quantity > 1) {
                                editQuantity(itemId, 'decrease');
                            }
                        }}>
                            <FiMinus />
                        </div>
                        <div className="quantity">{product.quantity}</div>
                        <div className="button primary circle increase-quantity" onClick={(evt) => {
                            editQuantity(itemId, 'increase');
                        }}>
                            <FiPlus />
                        </div>
                    </div>
                </div>
            );
        });
        return carts;
    }

    const dialogComponent = () => {
        return (
            <div className="dialog center fixed-full-screen">
                <div className="card app-dialog-content">
                    <div className="">
                        <div class="center"><h4>Purchase List</h4></div>
                        <div className="full-width">
                            <div className="is-left"><b>Name</b></div>
                            <div className="is-right"><b>Qty</b></div>
                        </div>
                        <div class="vertical-spacing"></div>
                        <div class="vertical-spacing"></div>
                        <div className="app-purchase-list">
                            {puchaseList()}
                        </div>
                        <div class="vertical-spacing"></div>
                        <div class="vertical-spacing"></div>
                        <div className="dialog-footer">
                            <div class={`button primary outline is-left`} onClick={(evt) => {
                                setShow(false);
                            }}>
                                <span>Cancel</span>
                            </div>
                        </div>
                        <div className="dialog-footer">
                            <div class={`button primary is-right`} onClick={(evt) => {
                                setShow(false);
                                setSuccess(true);
                            }}>
                                <span>Order</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const cartComponent = () => {
        return (
            <div className="container full-width">
                <div className="app-cart-list full-width">{renderCart()}</div>
                <div className="center">
                    <div className="button primary" onClick={(evt) => {
                        setShow(true);
                    }}>Review</div>
                </div>
                {show ? dialogComponent() : null}
                {
                    success ? <div className="dialog center fixed-full-screen">
                                <div className="card app-dialog-content">
                                    <div className="">
                                        <div class="center"><h4>Order Complete!</h4></div>
                                        
                                        <div class="vertical-spacing"></div>
                                        <div class="vertical-spacing"></div>
                                        <div className="center">Yeayy...! Your order is complete!</div>
                                        <div class="vertical-spacing"></div>
                                        <div class="vertical-spacing"></div>
                                        <div className="center">
                                            <div class={`button primary outline is-left`} onClick={(evt) => {
                                                setSuccess(false);
                                            }}>
                                                <span>Review</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> : null
                }
            </div>
        );
    }

    useEffect(() => {
        const cartData = localStorage.getItem('list_on_cart');
        if (cartData != null) {
            setProducts(JSON.parse(cartData));
        }
    });

    return (
        localStorage.getItem('is_complete') ? cartComponent() : <UnComplete />
    );
}

export default ShopingCart;