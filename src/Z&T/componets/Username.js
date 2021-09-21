import React from 'react';



class Username extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            Username:" ",
        }
    }

    update=(event)=>
    {
        this.setState(
            {
                Username:event.target.value

            }
        )
    }
      render()
    {
        return(
            <React.Fragment>
                <section className="m-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card bg-info">
                                    <div className="card-header bg-warning text-white">
                                    <h3>User-password</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <input 
                                                value={this.state.Username}
                                                onChange={this.update}
                                                className="form-control" type="text" placeholder="User_Name"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="form-footer bg-dark text-white">
                                       <h3>Print:-{this.state.Username}</h3> 

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


export default Username;