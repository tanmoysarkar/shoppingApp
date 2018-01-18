import React from 'react'
import axios from 'axios'
import config from '../config/config'
var api = config.api.root

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            product: [],
            productId: null
        }
    }

    componentWillMount(){
        this.product()
    }

    

    handleChange = (event) => {
        const target = event.target;
        var partialState = {};
        partialState[target.name] = target.value;
        this.setState(partialState);
    }

    product = ()=>{
        axios.get(api+'/api/product')
       .then((response)=>{
            console.log(response.data)
            this.setState({product: response.data})
        })
       .catch((error)=>{
        console.log("error",error)
       })
    }

    cartAdded = (event,values)=>{
        var data = {
            _id: event.target.id
        }
        axios.post(api+'/api/addToCart',data)
       .then((response)=>{
            if(localStorage.getItem("data")){
                let data = JSON.parse(localStorage.getItem("data"))
                data.push(response.data)
                localStorage.setItem("data", JSON.stringify(data));
            } else {
                localStorage.setItem("data", JSON.stringify([response.data]));
            }
            console.log(localStorage.getItem("data"))
            alert("Successfully Added")
        })
       .catch((error)=>{
        console.log("error",error)
       })
    }

    render(){
        let cart =[]
        for (var i = 0; i < this.state.product.length; i++) {
            cart[i] =   <div className="col-sm-4 col-xs-12" >
                            <div className="thumbnail">
                                <img src={this.state.product[i].imagePath} alt="..." className="img-responsive" style={{height:"200px"}}/>
                                <div className="caption">
                                    <h3>{this.state.product[i].name}</h3>
                                    <p className="description">{this.state.product[i].description}</p>
                                    <div className="col-xs-12">
                                        <div className="price pull-left">₹ {this.state.product[i].price}</div>
                                        <div className="count pull-right">{this.state.product[i].count} in Stock</div>
                                    </div><br/><br/>
                                    <div className="clearfix">
                                        <input type="hidden" className="productId" name="productId" value={this.state.product[i]._id}/>
                                        <a onClick={this.cartAdded} id={this.state.product[i]._id} className="btn btn-success pull-right" role="button">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>   
                       
        }
        
        return (
            <div>
                {cart}
            </div>
        )
    }

}
export default Home

