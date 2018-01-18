import React from 'react'
import axios from 'axios'
import config from'../../config/config'
var api = config.api.root

class checkout extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:[],
            sum:0,
            userId: localStorage.userId,
            userName: '',
            nameOnCard: '',
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            securityCode: '',
            amount: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        var partialState = {};
        partialState[target.name] = target.value;
        this.setState(partialState);
        console.log(target.value)
    }

    checkoutCart = (event)=>{
        event.preventDefault()
        var data = {
            userId: this.state.userId,
            userName: this.state.userName,
            userAddress: this.state.userAddress,
            nameOnCard: this.state.nameOnCard,
            cardNumber: this.state.cardNumber,
            expiryMonth: this.state.expiryMonth,
            expiryYear: this.state.expiryYear,
            securityCode: this.state.securityCode,
            amount: this.state.sum
        }
        console.log(data)
        axios.post(api+'/api/cartCheckout',data)
       .then((response)=>{
            console.log(response.data)
            alert("Your shopping is successfull")
            window.localStorage.clear()
            window.location.href = '/'
        })
       .catch((error)=>{
        console.log("error",error)
       })
    }

    componentWillMount(){
        let data = JSON.parse(localStorage.getItem("data"))
        let sum = 0
        data.map(x=>{
            sum+=x.price
        })
        this.setState({data:data,sum:sum})
    }

    render(){
        return (
        	<div>
            	<div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
                        <h1>Checkout</h1>
                        <h4>Total: ₹{this.state.sum} </h4>
                        <form>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" className="form-control" required name="userName" onChange={this.handleChange} value={this.state.userName}/>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="address">Address</label>
                                        <input type="text" id="address" className="form-control" required name="userAddress" onChange={this.handleChange} value={this.state.userAddress}/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="card-name">Name on card</label>
                                        <input type="text" id="card-name" name="nameOnCard" className="form-control" onChange={this.handleChange} value={this.state.nameOnCard} required/>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="card-number">Card number</label>
                                        <input type="text" id="card-number" className="form-control" placeholder="4242424242424242" name="cardNumber" onChange={this.handleChange} value={this.state.cardNumber} required/>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <div className="form-group">
                                                <label for="card-expiry-month">Expiry month</label>
                                                <input type="text" id="card-expiry-month" className="form-control" name="expiryMonth" onChange={this.handleChange} value={this.state.expiryMonth} required/>
                                            </div>
                                        </div>
                                        <div className="col-xs-4">
                                            <div className="form-group">
                                                <label for="card-expiry-year">Expiry year</label>
                                                <input type="text" id="card-expiry-year" name="expiryYear" className="form-control" onChange={this.handleChange} value={this.state.expiryYear} required/>
                                            </div>
                                        </div>
                                        <div className="col-xs-4">
                                            <div className="form-group">
                                                <label for="card-cvc">Security code</label>
                                                <input type="password" id="card-cvc" name="securityCode" className="form-control" onChange={this.handleChange} value={this.state.securityCode} required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.checkoutCart} name="userId" type="submit" class="btn btn-success">Buy!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default checkout
