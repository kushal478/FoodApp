import React from 'react';
import { customerList } from '../emplydata/CustomerStore';

class EmployeeData extends React.Component 
{
    constructor(props){
        super(props);
        this.state={
            customer:customerList
        }
    }
    render()
    {
        return(
            <React.Fragment>
                <section className='mt-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h2 className='h2 text-info'>Employee Data Sheet</h2>
                                <p className='h2'> This is My emloydata sheet  in which all the data of employes are available.
                                                   This is My emloydata sheet  in which all the data of employes are available.
                                                   This is My emloydata sheet  in which all the data of employes are available.</p>
                            </div>
                        </div>
                    </div>   
                </section>
                <section className='mt-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <table className='table table-hover text-center table-primary table-stiped'>
                                    <thead className='bg-dark text-white'>
                                        <tr>
                                            <th>Sno</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                            <th>Location</th>
                                        </tr>
                                        

                                    </thead>
                                    <tbody>
                                        {
                                            this.state.customer.map((customer)=>
                                            {
                                                return (
                                                    <tr>
                                                        <td>{customer.login.uuid.substr(customer.login.uuid.length-5)}</td>
                                                        <td>
                                                            <img src={customer.picture.medium} width="50" height="50" alt="not found"/>
                                                        </td>
                                                        <td>{customer.name.first} {customer.name.last}</td>
                                                        <td>{customer.dob.age} yrs</td>
                                                        <td>{customer.gender.toUpperCase()}</td>
                                                        <td>{customer.location.city} yrs</td>
                                                    </tr>
                                                )
                                            })
                                        }                                       
                                    </tbody>
                                </table>   
                            </div>
                        </div>
                    </div>                                
                </section>

          
           </React.Fragment>
        );
    };
};
export default EmployeeData;








