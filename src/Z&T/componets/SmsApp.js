import React from 'react';

class SmsApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            maxcount:100,
            msg:""
        }
    }
    update=(event)=>
    {
        this.setState(
            {
                msg:event.target.value
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
                            <div className="col-md-6">
                                <div className="card bg-info">
                                    <div className="card-header bg-warning text-white">
                                    <h1>SMS-APP</h1>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <textarea 
                                                value={this.state.msg}
                                                onChange={this.update}
                                                maxLength={this.state.maxcount}
                                                 rows="5" cols="66"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="form-footer bg-dark text-white text-center">
                                       <h1>count=<small> {this.state.msg.length} /100</small></h1>
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

export default SmsApp;