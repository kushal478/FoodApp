import React from 'react';

class LoginButton extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            islogin:true
        }
    }
    login=()=>
    {
        this.setState(
            {
               islogin:true 
            }
        )
    }

    logout=()=>
    {
        this.setState(
            {
               islogin:false
            }
        )
    }

    render()
    {
        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="m-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-warning text-white">
                                    <h1>Auth-Card</h1>
                                    </div>
                                    <div className="card-body">
                                        {
                                            this.state.islogin?<button onClick={this.logout} className="btn btn-info">Loging</button> : 
                                            <button onClick={this.login} className="btn btn-danger">Logout</button>
                                        }                                   
                                       

                                        {
                                            this.state.islogin ? <React.Fragment>                                                                  
                                                                 <p className="h3">This is Dhoni</p>
                                                                 </React.Fragment> : <React.Fragment>                                                                                         
                                                                                        <p className="h3">This is Virat</p>
                                                                                    </React.Fragment>
                                        }                                   

                                       
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
           </React.Fragment>
        );
    };
};
export default LoginButton;