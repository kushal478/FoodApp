import React from 'react';

class TodoPract extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            message:"",
            emptyarray:[]
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
    addtask=(event)=>
    {
       if(this.state.message !="")
       {
        this.setState({
            ...this.state,
            message:"",         
            emptyarray:[...this.state.emptyarray, this.state.message]
        })
       }
       else{
        window.alert("please fill the content")
    }
       
    }
    render()
    {
        return(
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h1>todo list</h1>
                                </div>
                                <div className="card-body">
                                    <input type="text" className="form-control"
                                    value={this.state.message}
                                    onChange={this.upmsg}/>
                                    <button className="btn btn-danger btn-sm"
                                    onClick={this.addtask}>add</button>

                                </div>
                                <div className="card-footer">
                                    {
                                        this.state.emptyarray.map((item)=>{
                                            return(
                                            <ul>
                                                <li>{item}</li>
                                            </ul>
                                            )

                                        })
                                    }
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default TodoPract;