import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index.js';

import './Item.css';

class Item extends Component {

    removeItem = (e) => {
        e.preventDefault()
        this.props.onDeleteItem(this.props.item.id);
    }


    render() {

        return (
            <div className="Item">
                <div className="Item__info">
                    <figure className="Item__img-box">
                        <img className="Item__img" src={this.props.item.imgUrl} alt="t-shirt pic" />
                    </figure>
                    <div className="Item__stat">
                        <h3>{this.props.item.name}</h3>
                        <p>Style #: {this.props.item.styleNum}</p>
                        <p>Color: {this.props.item.color}</p>

                        <div className="Item__controls">
                            <a href="#">EDIT</a> |
                            <a href="#" onClick={this.removeItem}>X REMOVE</a> |
                            <a href="#">SAVE FOR LATER</a> 
                        </div>
                    </div>
                </div>
                <div className="Item__size">{this.props.item.size}</div>
                <div className="Item__qty">
                    <input type="text" length="2" value={this.props.item.quantity}></input>
                </div>
                <div className="Item__price">{this.props.item.price}</div>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteItem: (id) => dispatch(actions.deleteItem(id))
    }
}

export default connect(null, mapDispatchToProps)(Item);