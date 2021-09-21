import React from 'react';
import ChildCard from './ChildCard';

class ParentCard extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            ptext:"",
            ctext:""
        }
       
    }
    update=(event)=>
    {
        this.setState(
            {
                ptext:event.target.value
            }
        )
    }

    resivedata=(value)=>
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
                    <div className="m-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card">                                        
                                        <div className="card-hader bg-danger">
                                            <p className="h3">Parent-Card</p>
                                            <small>{this.state.ctext}</small> 
                                        </div>
                                        <div className="card-body bg-info">
                                            <form className="form-inline">
                                                <div className="form-group">
                                                    <input
                                                    value={this.state.value}
                                                    onChange={this.update}
                                                    

                                                    type="text" className="form-control"/>
                                                </div>
                                            </form>
                                            <ChildCard sndptext={this.state.ptext} sendmecdata={this.resivedata}/>
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
export default ParentCard;