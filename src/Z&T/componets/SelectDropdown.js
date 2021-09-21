import React from 'react';


class SelectDropdown extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            select:""
        }
    }

    selected=(event)=>
    {
        this.setState(
            {
                select:event.target.value
            }
        )
    }
    render()
    {
        return(
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-light">
                                    <h1>Select Your Course</h1>
                                    <div className="card-body bg-info">
                                        <div className="row">
                                        <div className="col-md-6">
                                        <select
                                        value={this.state.select}
                                        onChange={this.selected}
                                        >
                                            <option value="html">html</option>
                                            <option value="css">css</option>
                                            <option value="javascript">javascript</option>
                                            <option value="reactjs">reactJs</option>
                                        </select>
                                        </div>
                                        <div className="col-md-6 text-white">
                                            <p>{this.state.select}</p>
                                        </div>
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

export default SelectDropdown;