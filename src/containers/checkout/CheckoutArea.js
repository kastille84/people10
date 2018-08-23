import React, {Component} from 'react';
import { connect } from 'react-redux';

class CheckoutArea extends Component {

    componentDidMount() {
        // set the subtotal based on how many items there are and quantity

        
    }

    render() {
        return (
            <div>
                <article className="promotion">
                    <div><p>ENTER PROMOTION CODE OR GIFT CARD</p></div>
                    <div>
                        <input />
                        <button>APPLY</button>    
                    </div>
                </article>
                <article className="subtotal">
                    <div>
                        <p>SUB TOTAL</p>
                        <p>PROMOTION CODE AJ10P APPLIED</p>
                        <p>ESTIMATED SHIPPING*</p>   
                        <small>You qualify for free shippingecause your order is over $50</small>                     
                    </div>
                    <div>
                        <p>{this.props.priceRedux.subtotal}</p>
                        <p>{this.props.priceRedux.promoCodeValue}</p>
                        <p>FREE</p>
                    </div>
                </article>
                <article className="total">
                    <div>
                        <h1>ESTIMATED TOTAL</h1>
                        <small>Tax will be applied during checkout</small>
                    </div>
                    <div>
                        <p>{this.props.priceRedux.subtotal - this.props.priceRedux.promoCodeValue}</p>
                    </div>
                </article>
                <article className="checkout">
                    <a>Continue Shopping</a>
                    <button>CHECKOUT</button>
                    <p>Secure checkout. Shopping is always safe & secure</p>
                </article>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        priceRedux: state.priceRedux
    }
}

export default connect(mapStateToProps)(CheckoutArea);