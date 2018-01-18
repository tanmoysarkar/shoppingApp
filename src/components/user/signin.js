import React from 'react'
import axios from 'axios'
import config from'../../../config/config'
var api = config.api.root

class signin extends React.Component{
    constructor(props){
        super(props)
        this.state ={
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

    signIn = (event)=>{
        event.preventDefault()
        var data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(api+'/api/signIn',data)
       .then((response)=>{
            console.log(response.data)
            if(response.data){
                window.localStorage.setItem("userName", response.data.name);
                window.localStorage.setItem("userId", response.data._id);
                window.localStorage.setItem("userEmail", response.data.email);
                alert("Successfully login")
                window.location.href = '/'
            }else{
                alert("Email / Password not found . Please signup to continue.")
            }
        })
       .catch((error)=>{
        console.log("error",error)
       })
    }

    render(){
        return (
        	<div>
                <div className="col-md-4 col-md-offset-4 background-color-signin">
                    <h1>Login</h1><br/>
                    
                    <form>
                        <div className="form-group">
                            <label for="email">E-Mail</label>
                            <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} className="form-control"/>
                        </div>
                        <button type="submit" onClick={this.signIn} className="btn btn-primary">Enter</button>
                    </form>
                    <br/>
                    <p>Not yet Registered? <a href="/signup">Click here !</a></p>
                </div>
            </div>
        )
    }

}
export default signin