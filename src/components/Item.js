import React, { Component } from 'react';

class Item extends Component {
    render() {

        return (
            <div className="Item">
                <figure className="Item__img-box">
                    <img className="Item__img" src={this.props.item.imgUrl} alt="t-shirt pic" />
                </figure>
                <div className="Item__info">
                    <h3>{this.props.item.name}</h3>
                    <p>Style #: {this.props.item.styleNum}</p>
                    <p>Color: {this.props.item.color}</p>

                    <div className="Item_controls"></div>
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

export default Item;