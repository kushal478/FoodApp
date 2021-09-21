import React from 'react';


class WishMsg extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            msg:"welcom"
        }

    }

    Display=(value)=>
    {
        this.setState(
            {
                msg:value
            }
        )
    }
          
    render()
    {
        return(
            <React.Fragment>
                <section className='mt-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='card'>
                                    <div className='card-header text-white bg-info text-center'>
                                        <h1>wish msg</h1>
                                        
                                    </div>
                                    <div className='card-body'>
                                        <h1>{this.state.msg}</h1>

                                    </div>
                                    <div className='card-footer'>
                                        <button onClick={this.Display.bind(this,"good-morn")} className='btn btn-danger'>good morning</button>
                                        <button onClick={this.Display.bind(this,"good-eve.")} className='btn btn-danger'>good evening</button>
                                        <button onClick={this.Display.bind(this,"good-night")} className='btn btn-danger'>good night</button>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </section>
               
            </React.Fragment>   
        )
    }
}




export default WishMsg;