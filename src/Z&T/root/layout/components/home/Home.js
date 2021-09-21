import React from "react";


class Home extends React.Component 
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex-column justify-content-center align-team-center text-center h-10">
                            <h5 className="display-4">Reactn Routing</h5>
                            <p className="lead px-4">Wikipedia has been criticized for its uneven accuracy and for exhibiting systemic bias, including gender bias, with the majority of editors being male.[4] Edit-a-thons have been held to encourage female editors and increase the coverage of women's topics.[10] In 2006, Time magazine stated that the open-door policy of allowing anyone to edit had made Wikipedia </p>

                        </div>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Home;  