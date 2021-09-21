import React from 'react';


class Counter extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    Increas=()=>
    {
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }


    
    render()
    {
        return(
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="card bg-info">
                            <div className="card-body bg-light">
                                <h1>{this.state.count}</h1>
                                <button onClick={this.Increas} className='btn btn-info'>click here to increas+1</button>               

                            </div>
                        </div>
                    </div>
                </section>
               
            </React.Fragment>   
        )
    }
}




export default Counter;