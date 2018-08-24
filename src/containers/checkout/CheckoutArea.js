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
                    <div><p>ENTER PROMOTION CODE OR GIFT <br/>CARD</p></div>
                    <div className="Checkout__promotion-input">
                        <input type="text" value="AJ10P"/>
                        <button className="btn">APPLY</button>    
                    </div>
                </article>
                <article className="Checkout__subtotal">
                    <div>
                        <p>SUB TOTAL</p>
                        <p>PROMOTION CODE AJ10P APPLIED</p>
                        <p style={{marginBottom: "-6px"}}>ESTIMATED SHIPPING*</p>   
                        <small>You qualify for free shippingecause your order is over $50</small>                     
                    </div>
                    <div>
                        <h2>$ {this.props.priceRedux.subtotal.toFixed(2)}</h2>
                        <h2>$ {this.props.priceRedux.promoCodeValue.toFixed(2)}</h2>
                        <p>FREE</p>
                    </div>
                </article>
                <article className="Checkout__total">
                    <div>
                        <h1>ESTIMATED TOTAL</h1>
                        <small>Tax will be applied during checkout</small>
                    </div>
                    <div>
                        <h2>$ {(this.props.priceRedux.subtotal - this.props.priceRedux.promoCodeValue).toFixed(2)}</h2>
                    </div>
                </article>
                <article className="checkout-cta">
                    <a href="#">Continue Shopping</a>
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