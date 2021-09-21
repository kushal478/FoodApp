import React from 'react';

class ChildCard extends React.Component
{
    constructor(props){
        super(props);
        this.state={ 
            ctext:""
        }
       
    }
    update=(event)=>
    {
        this.setState(
            {
                ctext:event.target.value
            }
        )
        this.props.sendmecdata(event.target.value)
    }
    
    
    render()
    {
        return(
            <React.Fragment>
                <section>
                    <div className="m-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card">                                        
                                        <div className="card-hader bg-success">
                                            <p className="h3">Child-Card</p>
                                            <small>{this.props.sndptext}</small>   {/*  parent data child me dalne k liye props use krte he */}
                                        </div>
                                        <div className="card-body bg-secondary">
                                            <form className="form-inline">
                                                <div className="form-group">
                                                    <input
                                                    value={this.state.value}
                                                    onChange={this.update}
                                                    type="text" className="form-control"/>
                                                </div>
                                            </form>
                                        </div>

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
export default ChildCard;