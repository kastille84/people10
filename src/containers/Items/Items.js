import React, {Component} from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';

import Item from '../../components/Item';

import './Items.css';

class Items extends Component {
    
    render() {
        return (
            <table className="Items">
                <thead>
                    <tr className="Items__header">
                        <th className="item_col">{this.props.items.length} ITEMS</th>
                        <th className="size_col">SIZE</th>
                        <th className="qty_col">QTY</th>
                        <th className="price_col">PRICE</th>
                    </tr>                
                </thead>
                <tbody>
                    {this.props.items.map(item => {
                        return (<Item item={item} key={item.name} />);
                    })}                
                </tbody>
                
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemRedux.items
    }
}
export default connect(mapStateToProps)(Items);