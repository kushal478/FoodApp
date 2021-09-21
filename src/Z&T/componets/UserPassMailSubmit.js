import React from 'react';


class UserPassMailSubmit extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            user:{
                username:" ",
                password:" ",
                mail:" ",
                select:" ",
                type:" "
            }            
        }
    }

    update=(event)=>
    {
        if(event.target.type=="checkbox")
        {
            this.setState(
                {
                    user:{
                        ...this.state.user,
                        [event.target.name]:event.target.checked
                    }
                    
                }
            )
        }

        else
        {
            this.setState(
                {
                    user:{
                        ...this.state.user,
                        [event.target.name]:event.target.value

                    }
                }
            )
        }       
    }

    submit=(event)=>
    {
        event.preventDefault();
        console.log(this.state.user);
    }
    render()
    {
        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="m-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-warning text-white">
                                    <h1>User-password</h1>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.submit}>
                                            <div className="form-group">
                                                <input
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.update}

                                                className="form-control" type="text" placeholder="Username"/>

                                                <input 
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.update}

                                                className="form-control my-3" type="password" placeholder="Password"/>

                                                <input 
                                                name="mail"
                                                value={this.state.mail}
                                                onChange={this.update}

                                                className="form-control my-3" type="text" placeholder="mail_id"/>

                                                
                                                <select 
                                                
                                                name="select"
                                                value={this.state.select}
                                                onChange={this.update}>
                                                                        
                                                    <option value="html">HTML</option>
                                                    <option value="css">CSS</option>
                                                    <option value="java">JAVA</option>
                                                    <option value="react">REACT</option>
                                                </select>

                                                <div className="form-check my-3">
                                                    <input 
                                                    name="type"
                                                    onChange={this.update}
                                                    className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        i agree with all terms and conditions.
                                                    </label>
                                                </div>

                                               <input type="submit" className="btn btn-info"/>


                                            </div>
                                        </form>
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

export default UserPassMailSubmit;