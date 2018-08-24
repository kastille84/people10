import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index.js';

import './ItemEditModal.css';

class ItemEditModal extends Component {

    state = {
        id: this.props.itemRedux.selectedItem.id,
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

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSetEditSelectedItem(this.state);
    }

    render() {
        return (    
            <div className={"ItemEdit " + (this.props.itemRedux.editItemMode ? 'showModal': '')}>
                <div className="ItemEdit__close">
                    <span onClick={this.onUnselectItemFunc}>x</span>
                </div>
                <div className="ItemEdit__container">
                    <div className="ItemEdit__info">
                        <h4>{this.props.itemRedux.selectedItem.name}</h4>
                        <h2>$ {this.props.itemRedux.selectedItem.price}</h2>
                        <p className="ItemEdit__styleNum">{this.props.itemRedux.selectedItem.styleNum}</p>
                        <p className="ItemEdit__control-color">
                            <span 
                                className="ItemEdit__control-color--red" 
                                onClick={()=> {this.onColorChange('red')}}>                                
                            </span> 
                            <span 
                                className="ItemEdit__control-color--green" 
                                onClick={()=> {this.onColorChange('green')}}>
                            </span> 
                            <span 
                                className="ItemEdit__control-color--blue" 
                                onClick={()=> {this.onColorChange('blue')}}>
                            </span>
                        </p>
                        <p>Color: {this.state.color}</p>
                        <form onSubmit={this.onSubmitForm}>
                            <select onChange={this.onSelectChange}>
                                <option value="S">small</option>
                                <option value="M">medium</option>
                                <option value="L">large</option>
                            </select>
                            <input 
                                type="number" 
                                maxLength="2" 
                                defaultValue={this.props.itemRedux.selectedItem.quantity}
                                onChange={this.onQuantityChange}    
                            /><br/>
                            <button className="btn btn-primary">EDIT</button>
                        </form>
                        <a href="#">Check product details</a>
                    </div>
                    <div className="ItemEdit__img">
                        <img src={this.props.itemRedux.selectedItem.imgUrl} alt="shirt pic" />
                    </div>
                
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
        onSetEditItemMode: (bool) => dispatch(actions.setEditItemMode(bool)),
        onSetEditSelectedItem: (itemInfo) => dispatch(actions.setEditSelectedItem(itemInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditModal);