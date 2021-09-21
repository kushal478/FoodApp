import React from 'react';
import card1 from '../assets/img/card_1.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg'
import CardContainer from './CardContainer';

class TourCard extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            country:['india','usa','china']
        }

    }
    render()
    {
        return(
            <React.Fragment>
                <section className="mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <CardContainer message={this.state.country[0]} CardImg={card1}/>                              
                            </div>

                            <div className="col-md-4">
                                <CardContainer message={this.state.country[1]} CardImg={card2}/>                             
                            </div>

                            <div className="col-md-4">
                                 <CardContainer message={this.state.country[2]} CardImg={card3}/>                              
                            </div>


                        </div>

                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default TourCard; 