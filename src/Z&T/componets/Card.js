import React from 'react';


class Card extends React.Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <React.Fragment>
                <section className="mt-5">
                    <div className="container">
                        <div className="card">
                            <div className="cardbody">
                                <h1> {this.props.message}</h1>
                                
                                <p> Thanks for reading! I know there are many methods to do that 
                                    but this method worked for me and like to share with you.
                                    Hope this article helps, feel free to share it with your friends, any feedback will be appreciated :)

                                </p>

                            </div>

                        </div>

                    </div>
                </section>

            </React.Fragment>
        )
    }
}



export default Card;