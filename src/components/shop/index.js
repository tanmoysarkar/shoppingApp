import React from 'react'

class index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        	<div>
            	<div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
                        <div id="success" className="alert alert-success" >
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                   
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <img src="" alt="..." className="img-responsive"/>
                                <div className="caption">
                                    <h3></h3>
                                    <p className="description"></p>
                                    <div className="col-xs-12">
                                        <div className="price pull-left">₹ </div>
                                        <div className="count pull-right"> in Stock</div>
                                    </div><br/><br/>
                                    <div className="clearfix">
                                        
                                        <a href="/add-to-cart/" className="btn btn-success pull-right" role="button">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

}
export default index