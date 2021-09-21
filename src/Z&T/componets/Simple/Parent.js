import React from 'react';
import Child from './Child';

class Parent extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            ptext:"i am coming form parent component",
            ctext:""
        }
    }
    recivData=(value)=>
    {
        this.setState(
            {
                ...this.state,
                ctext:value
            } 
        )

    }
    render()
    {
        return(
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-hader bg-info text-white text-center">
                                        <h1>Parent component</h1> 
                                        <p>{this.state.ctext}</p>                                   
                                    </div>
                                    <div className="card-body bg-warning">
                                        <Child PsendData={this.state.ptext} sendInfo={this.recivData}/>                                   
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
export default Parent;