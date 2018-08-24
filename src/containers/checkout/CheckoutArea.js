import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';

import './CheckoutArea.css';

class CheckoutArea extends Component {

    componentDidMount() {
        // set the subtotal based on how many items there are and quantity
        let subtotal = 0;
        this.props.itemRedux.items.forEach(item => {
            subtotal = subtotal + (item.price * item.quantity)
        });
        
        this.props.onSetSubtotalPrice(subtotal);
    }

    render() {
        return (
            <div className="Checkout">
                <article className="Checkout__promotion">
                    <div><p>ENTER PROMOTION CODE OR GIFT CARD</p></div>
                    <div>
                        <input />
                        <button className="btn">APPLY</button>    
                    </div>
                </article>
                <article className="Checkout__subtotal">
                    <div>
                        <p>SUB TOTAL</p>
                        <p>PROMOTION CODE AJ10P APPLIED</p>
                        <p>ESTIMATED SHIPPING*</p>   
                        <small>You qualify for free shippingecause your order is over $50</small>                     
                    </div>
                    <div>
                        <p>$ {this.props.priceRedux.subtotal}</p>
                        <p>$ {this.props.priceRedux.promoCodeValue}</p>
                        <p>FREE</p>
                    </div>
                </article>
                <article className="Checkout__total">
                    <div>
                        <h1>ESTIMATED TOTAL</h1>
                        <small>Tax will be applied during checkout</small>
                    </div>
                    <div>
                        <p>$ {this.props.priceRedux.subtotal - this.props.priceRedux.promoCodeValue}</p>
                    </div>
                </article>
                <article className="checkout-cta">
                    <a>Continue Shopping</a>
                    <button className="btn btn-primary">CHECKOUT</button>
                    <p>Secure checkout. Shopping is always safe & secure</p>
                </article>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        priceRedux: state.priceRedux,
        itemRedux: state.itemRedux
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSubtotalPrice: (subtotal) => dispatch(actions.setSubtotalPrice(subtotal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutArea);