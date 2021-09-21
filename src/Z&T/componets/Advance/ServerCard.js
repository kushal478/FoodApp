import React from 'react';

class ServerCard extends React.Component
{
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
                                        <p>server component</p>                                    
                                    </div>
                                    <div className="card-body">
                                           <h1>Total={this.props.sndmetotal}</h1>                                
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
export default ServerCard;