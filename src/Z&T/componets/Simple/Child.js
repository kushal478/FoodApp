import React from 'react';

class Child extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            ctext:"i am coming from child component"
        }
    }
    CsendData=()=>
    {
        this.props.sendInfo(this.state.ctext);
        
    }
    render()
    {
        return(
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-light mb-3">
                                    <div className="card-hader ml-3">
                                        <p>Child component</p>                                    
                                    </div>
                                    <div className="card-body">
                                        <p>{this.state.ctext}</p>
                                        <p>{this.props.PsendData}</p> 
                                        <button onClick={this.CsendData} className="btn btn-danger btn-sm">clickhere</button>                                   
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
export default Child;