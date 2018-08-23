import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index.js';

import './Item.css';

class Item extends Component {

    removeItem = (e) => {
        e.preventDefault();
        this.props.onDeleteItem(this.props.item.id);

        this.props.onSetSubtractItemPrice(this.props.item.price);
    }

    editItem = (e) => {
        e.preventDefault();
        this.props.onSetEditItemMode(true);
        this.props.onSetSelectedItem(this.props.item);
    }


    render() {

        return (
            <tr className="Item border-bottom">
                <td className="Item__info item_col">
                    <figure className="Item__img-box">
                        <img className="Item__img" src={this.props.item.imgUrl} alt="t-shirt pic" />
                    </figure>
                    <div className="Item__stat">
                        <h3>{this.props.item.name}</h3>
                        <p>Style #: {this.props.item.styleNum}</p>
                        <p>Color: {this.props.item.color}</p>

                        <div className="Item__controls">
                            <a href="#" onClick={this.editItem}>EDIT</a> |
                            <a href="#" onClick={this.removeItem}>X REMOVE</a> |
                            <a href="#">SAVE FOR LATER</a> 
                        </div>
                    </div>
                </td>
                <td className="Item__size size_col">
                    <p className="heading">{this.props.item.size}</p>
                </td>
                <td className="Item__qty qty_col">
                    <input type="text" maxLength="2" value={this.props.item.quantity}></input>
                </td>
                <td className="Item__price price_col">
                    <p>{this.props.item.price}</p>
                </td>
                
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteItem: (id) => dispatch(actions.deleteItem(id)),
        onSetEditItemMode: (bool) => dispatch(actions.setEditItemMode(bool)),
        onSetSelectedItem: (item) => dispatch(actions.setSelectedItem(item)),

        onSetSubtractItemPrice: (price) => dispatch(actions.setSubtractItemPrice(price))
    }
}

export default connect(null, mapDispatchToProps)(Item);