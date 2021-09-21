import React from 'react';


class HwPasswordBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            type:"password"
        }
    }

    update=()=>
    {
        if(this.state.type=="password")
        {
            this.setState(
                {
                    type:"text"
                }
            )
        }
        else
        {
            this.setState(
                {
                    type:"password"
                }
            )
        }
    }
    render()
    {
        return(
            <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header bg-success text-white">
                                    Chang-Password
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="input-group mb-3">
                                                <input  className="form-control" 
                                                
                                                type={this.state.type}
                                                placeholder="Password"/>
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <input onChange={this.update} type="checkbox"/>
                                                    <span className="ml-2">Show Password</span>

                                                </div>
                                            </div>
                                            </div>
                                        </form>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                                       
           </React.Fragment>
        );
    };
};

export default HwPasswordBar;