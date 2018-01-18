import React from 'react'
import axios from 'axios'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        console.log(window.localStorage)
    }

    logoutSession = ()=>{
        window.localStorage.clear()
        window.location.href = '/'
    }

    render(){
        const itemAdded = localStorage.getItem("data")
        const isLoggedIn = window.localStorage.userName
        const userLoginIn = <ul className="dropdown-menu">
                                <li><a href="/profile"> Profile</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a onClick={this.logoutSession}>LogOut</a></li>
                            </ul>
        const userNotLogin = <ul className="dropdown-menu">
                                <li><a href="/signup">SignUp</a></li>
                                <li><a href="/signin">SignIn</a></li>
                            </ul>
        return (
        	<div>
	            <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Shopping Cart</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right header-items">
                                <li>
                                    {
                                        (isLoggedIn) ? <div>
                                            <a href="/shopping-cart" className="your-cart">
                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Your cart
                                                <span className="badge"></span>
                                            </a>
                                        </div> :(itemAdded) ? <div>
                                            <a href="/signin" className="loginToView">
                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Login to view your cart
                                                <span className="badge"></span>
                                            </a>
                                        </div>
                                        : <div>
                                            <a href="/signin" className="loginToView">
                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Login to view your cart
                                                <span className="badge"></span>
                                            </a>
                                        </div>
                                    }
                                </li>
                                <li className="dropdown">
                                    {
                                        isLoggedIn ? <div>
                                         <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i>
                                         {window.localStorage.userName}
                                         <span class="caret"></span></a>
                                         {userLoginIn}
                                      </div> : <div>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i> User Profile<span class="caret"></span></a>
                                        {userNotLogin}
                                      </div>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}
export default Header