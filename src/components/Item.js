import React from 'react'
import axios from 'axios'

class Item extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            (this.props.item)&&
             <div className="row">
                <div className="col-xs-6 col-sm-offset-3">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="badge"></span>
                            <img src={this.props.item.imagePath} className="cartItems" />
                            <strong>{this.props.item.name}</strong>
                            <span className="label  item-price">₹ {this.props.item.price}</span>
                            <div className="btn-group remove-all">
                                <a id={this.props.item._id} onClick={()=>{this.props.removeItem(this.props.item._id)}} title="Remove" className="removeItem"><i className="fa fa-trash-o"  aria-hidden="true"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default Item

