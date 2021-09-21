import React from 'react';

class Employee extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            employee:[
                {
                    id:101,
                    name:"rahul",
                    course:"mca"
                },
                {
                    id:102,
                    name:"mukul",
                    course:"ba"
                },
                {
                    id:101,
                    name:"rakesh",
                    course:"mba"
                }
            ]
        }

    }
    render()
    {
        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {
                                    this.state.employee.map((employee)=>
                                    {
                                        return (
                                            <div className="card m-3">                                        
                                            <div key={employee.id} className="card-body bg-info">                                        
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                    ID:{employee.id}  
                                                    </li>
                                                    <li className="list-group-item">
                                                        NAME:{employee.name}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Course:{employee.course}
                                                    </li>                                                
                                                </ul>                                        
                                            </div>                                   
                                            </div>)                                        
                                    })
                                }                                
                            </div>
                        </div>
                    </div>
                </section>
           
           </React.Fragment>
        );
    };
};
export default Employee;