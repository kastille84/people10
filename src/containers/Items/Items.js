import React, {Component} from 'react';
import { connect } from 'react-redux';

import Item from '../../components/Item';

import './Items.css';

class Items extends Component {
    

    render() {
        return (
            <div className="Items">
                <div className="Items__header">
                    <p>{this.props.itemRedux.items.length} ITEMS</p>
                    <p>SIZE</p>
                    <p>QTY</p>
                    <p>PRICE</p>
                </div>
                <div className="Items__body">    
                    {this.props.itemRedux.items.map(item => {
                        return (<Item item={item} key={item.name} />);
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemRedux: state.itemRedux
    }
}
export default connect(mapStateToProps)(Items);