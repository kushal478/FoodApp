import React from "react";


class About extends React.Component 
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card bg-light">
                                <div className="card-body bg-info">
                                    <h5 className="display-4">ABOUT-US</h5>
                                    <p className="lead px-4">Wikipedia has been criticized for its uneven accuracy and for exhibiting systemic bias, including gender bias, with the majority of editors being male.[4] Edit-a-thons have been held to encourage female editors and increase the coverage of women's topics.[10] In 2006, Time magazine stated that the open-door policy of allowing anyone to edit had made Wikipedia </p>

                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </React.Fragment>
        )
    }
}

export default About;  