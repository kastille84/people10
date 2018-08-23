import React, {Component} from 'react';
import { connect } from 'react-redux';

import Item from '../../components/Item';

import './Items.css';

class Items extends Component {


    render() {
        return (
            <table className="Items">
                <tr className="Items__header">
                    <th className="item_col">{this.props.itemRedux.items.length} ITEMS</th>
                    <th className="size_col">SIZE</th>
                    <th className="qty_col">QTY</th>
                    <th className="price_col">PRICE</th>
                </tr>
                {this.props.itemRedux.items.map(item => {
                    return (<Item item={item} key={item.name} />);
                })}
                
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemRedux: state.itemRedux
    }
}
export default connect(mapStateToProps)(Items);