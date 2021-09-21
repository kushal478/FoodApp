import React from 'react';

class TodoList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            message:"",
            array:[]
        }
    }
    upmsg=(event)=>
    {
        this.setState(
            {
                ...this.state,
                message:event.target.value
            }
        )
    }
    uparray=()=>
    {
        this.setState(
            {
                ...this.state,
                array:[...this.state.array,this.state.message]
            }
        )
    }
    render()
    {
        return(
            <React.Fragment>
                <section className="mt-5">
                    <div className="row">                       
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header">
                                <input type="text" className="form-control" 
                                value={this.state.messsage} 
                                onChange={this.upmsg}/>
                                <button className="btn btn-danger" onClick={this.uparray}>add</button>
                                </div>

                                <div className="card-body bg-warning">
                                    { 
                                            this.state.array.map((xyz)=>
                                            {
                                                return(
                                                    <ul>
                                                        <li>{xyz}</li>
                                                    </ul>
                                                )
                                            })
                                    }
                                </div>                               

                            </div>                            
                        </div>
                        

                    </div>

                </section>
            </React.Fragment>

        )
    }
}

export default TodoList;