import React from 'react'
import axios from 'axios'
import Item from './Item'

class Shoppingcart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentWillMount(){
        this.setState({data:JSON.parse(localStorage.getItem("data"))})
    }

    removeItem=(_id)=>{
        var newData = []
        this.state.data.map(item=>{
            if(item._id != _id){
                newData.push(item)
            }
        })
        this.setState({data:newData},()=>{
            localStorage.setItem("data", JSON.stringify(this.state.data));
        })
    }

     

    render(){
        const itemAdded = this.state.data
        const isLoggedIn = window.localStorage.userName
        let noCartAdded =   <div className="row">
                                <div className="col-xs-6 col-sm-offset-3">
                                    <h2>No shopping cart items</h2>
                                    <a href="/" type="button" className="btn btn-success"><i className="fa fa-arrow-left" aria-hidden="true"> Continue Shopping</i> </a>
                                </div>
                            </div>

        let cartCheckout = <div className="row">
                                <div className="col-xs-2 col-sm-offset-3">
                                    <a href="/" type="button" className="btn btn-success"><i className="fa fa-arrow-left" aria-hidden="true"> Continue Shopping</i> </a>
                                </div>
                                {
                                    isLoggedIn ? <div>
                                     <div className="col-xs-2 col-sm-offset-3 checkout-item">
                                        <a href="/checkout" type="button" className="btn btn-success">Checkout</a>
                                    </div>
                                  </div> : <div>
                                    <div className="col-xs-2 col-sm-offset-3 checkout-item">
                                        <a href="/signin" type="button" className="btn btn-success">Sign In For Checkout</a>
                                    </div>
                                  </div>
                                }
                                
                            </div>
                            

        

        let cartTotalPrice =[]
        var sum = 0
        let totalCart = null
        if(this.state.data){
            for (var i = 0; i < this.state.data.length; i++) {
                sum += parseInt(this.state.data[i].price); //also didn't work
            }
        
             totalCart = <div className="row">
                                <div className="col-xs-6 col-sm-offset-3">
                                    <strong>Total:₹{sum} </strong>
                                </div>
                            </div>
            var items = []
            this.state.data.map(item=>{
                console.log(item)
                items.push(
                    <Item 
                    item={item}
                    removeItem={this.removeItem}/>
                );
            })
        }
        return (
            <div>
                {
                    (itemAdded) ? <div>
                        {items}
                        {totalCart}
                        {cartCheckout}
                    </div> : <div>
                        {noCartAdded}
                    </div>
                }
            </div>
        )
    }

}
export default Shoppingcart

