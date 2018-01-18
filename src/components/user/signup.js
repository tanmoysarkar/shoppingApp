import React from 'react'
import axios from 'axios'
import config from'../../../config/config'
var api = config.api.root


class signup extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name: null,
            email: null,
            password: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        var partialState = {};
        partialState[target.name] = target.value;
        this.setState(partialState);
    }

    signUp = (event)=>{
        event.preventDefault()
        var data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        console.log(data)
        axios.post(api+'/api/user',data)
       .then((response)=>{
            console.log(response.data)
            alert("Successfully Signup")
            window.location.href = '/signin'
        })
       .catch((error)=>{
        console.log("error",error)
       })
    }

    render(){
        return (
        	<div>
                <div className="col-md-4 col-md-offset-4 background-color-signup">
                    <h1>User Registration</h1><br/>
                    <form>
                        <div className="form-group">
                            <label for="name">User Name</label>
                            <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label for="email">E-Mail</label>
                            <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} className="form-control"/>
                        </div>
                    
                        <br/>
                        
                        <button onClick={this.signUp} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}
export default signup