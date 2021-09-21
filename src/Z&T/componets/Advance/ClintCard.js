import React from 'react';

class ClintCard extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            price:"",
            gst:""
           }
    }

    update=(event)=>
    {
        this.setState(
            {
                ...this.state,
                [event.target.name]:Number(event.target.value)
            }
        )
    }
    submit=(event)=>
    {
        event.preventDefault()
        let tex=this.state.price*this.state.gst/100
        let total=this.state.price+tex
        this.props.sndData(total)
    }



   
    render()
    {
        return(
            <React.Fragment> 
                <section className="m-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-hader bg-info text-white">
                                        <h1>Clint-Card</h1>                               
                                    </div>
                                    <div className="card-body">
                                        <form
                                        onSubmit={this.submit}>
                                            <div className="form-group">
                                                <input 
                                                name="price"
                                                onChange={this.update}
                                                type="number" className="form-control"/>
                                                
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                
                                                name="gst"
                                                onChange={this.update}
                                                type="number" className="form-control"/>

                                            </div>
                                            <input type="submit" className="btn btn-danger btn-sm" value="submit"/>
                                        </form>                                  
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
export default ClintCard;