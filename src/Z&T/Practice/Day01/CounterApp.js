import React from 'react';

class CounterApp extends React.Component
{
    render()
    {
        return(
            <ReactFragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h1>0</h1>
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-danger"></button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </ReactFragment>

        )
    }
}

export default CounterApp;