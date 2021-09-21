import React from 'react';

class DigitalWatch extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            curanttime:new Date().toLocaleTimeString()
        }
    }

    componentDidMount()
    {
       this.timer=setInterval(() => {
           this.setState(
               {
                curanttime:new Date().toLocaleTimeString()
               }
           )
           
       }, 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timer)
    }
    render()
    {
        return(
            <React.Fragment>
                <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6"> 
                                <div className="card ">
                                    <div className="card-hader bg-dark text-white">
                                        <p>Digital-Watch</p>                                    
                                    </div>
                                    <div className="card-body">
                                           <h1>{this.state.curanttime}</h1>                                
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
export default DigitalWatch;