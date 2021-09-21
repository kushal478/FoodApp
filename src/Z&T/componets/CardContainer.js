import React from 'react';
import card1 from '../assets/img/card_1.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg';


class CardContainer extends React.Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="card">
                    <img src={this.props.CardImg} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <h1>{this.props.message}</h1>
                        <p>Thanks for reading! I know there are many methods to do that but this 
                            method worked for me and like to share with you.
                            Thanks for reading! I know there are many methods
                            Thanks for reading! I know there are many methods
                        </p>

                    </div>

                </div>
               
            </React.Fragment>
        )
    }
}




export default CardContainer;