import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index.js';

import './ItemEditModal.css';

class ItemEditModal extends Component {
    onUnselectItemFunc = () => {
        this.props.onSetSelectedItem(null);
        this.props.onSetEditItemMode(false);
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
                    <p>color selector here</p>
                    <p>Color: {this.props.itemRedux.selectedItem.color}</p>
                    <form>
                        <select>
                            <option>small</option>
                            <option>medium</option>
                            <option>large</option>
                        </select>
                        <input type="number" value={this.props.itemRedux.selectedItem.quantity} />
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