import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index.js';

import './ItemEditModal.css';

class ItemEditModal extends Component {

    state = {
        size: this.props.itemRedux.selectedItem.size,
        color: this.props.itemRedux.selectedItem.color,
        quantity: this.props.itemRedux.selectedItem.quantity,
    }

    onUnselectItemFunc = () => {
        this.props.onSetSelectedItem(null);
        this.props.onSetEditItemMode(false);
    }

    onQuantityChange = (e) => {
        //validation required
        this.setState({quantity: e.target.value})
    }

    onSelectChange = (e) => {
        this.setState({size: e.target.value})
    }

    onColorChange = (newColor) => {
        this.setState({color: newColor})
    }

    render() {
        return (    
            <div className={"ItemEdit " + (this.props.itemRedux.editItemMode ? 'showModal': '')}>
                <div className="ItemEdit__close">
                    <span onClick={this.onUnselectItemFunc}>X</span>
                </div>
                <div className="ItemEdit__info">
                    <h3>{this.props.itemRedux.selectedItem.name}</h3>
                    <p>{this.props.itemRedux.selectedItem.price}</p>
                    <p>{this.props.itemRedux.selectedItem.styleNum}</p>
                    <p>
                        <span onClick={()=> {this.onColorChange('red')}}>red</span> 
                        <span onClick={()=> {this.onColorChange('green')}}>green</span> 
                        <span onClick={()=> {this.onColorChange('blue')}}>blue</span>
                    </p>
                    <p>Color: {this.props.itemRedux.selectedItem.color}</p>
                    <form>
                        <select onChange={this.onSelectChange}>
                            <option value="s">small</option>
                            <option value="m">medium</option>
                            <option value="l">large</option>
                        </select>
                        <input 
                            type="number" 
                            defaultValue={this.props.itemRedux.selectedItem.quantity}
                            onChange={this.onQuantityChange}    
                        />
                        <button>EDIT</button>
                    </form>
                    <a href="#">Check product details</a>
                </div>
                <div className="ItemEdit__img">
                    <img src={this.props.itemRedux.selectedItem.imgUrl} alt="shirt pic" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemRedux: state.itemRedux
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSelectedItem: (bool) => dispatch(actions.setSelectedItem(bool)),
        onSetEditItemMode: (bool) => dispatch(actions.setEditItemMode(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditModal);