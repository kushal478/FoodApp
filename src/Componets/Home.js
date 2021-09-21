import React, { useEffect, useState } from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


import img1 from '../assets/food-app-img/img1.png'
import playstore from '../assets/food-app-img/playstore.png'
import appstore from '../assets/food-app-img/appstore.png'
import phone from '../assets/food-app-img/phone.png'
import gift from '../assets/food-app-img/gift.png'
import win from '../assets/food-app-img/win.png'
import hand from '../assets/food-app-img/hand.png'


import computer from '../assets/food-app-img/computer.png';
import foodtray from '../assets/food-app-img/food-tray.png';
import location from '../assets/food-app-img/location.png';
import motorcycle from '../assets/food-app-img/motorcycle.png';
import HomeSkeleton from './Skeleton/HomeSkeleton';

function Home(props) {

    const [isLoding, setisLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => { setisLoding(false) }, 2000)
    }, [])


    const useStyles = makeStyles((theme) => ({
        Orderfood: {
            backgroundColor: "#f6f6f6",
            padding: " 50px 10px",

        },
        Orderfoodheading: {
            //color: "#344767",


        },
        button1: {
            borderRadius: '.5rem',
            backgroundColor: '#85B767',
            color: '#fff',

            '&:hover': {
                backgroundColor: '#85B767',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#85B767',


            },
        },


        button2: {
            borderRadius: '.5rem',
            color: '#67748e',
            '&:hover': {
                backgroundColor: '#85B767',
                color: '#fff',
            },
        },
        button: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        }
    }));


    const classes = useStyles();


    return (
        <>
            {
                isLoding ? <HomeSkeleton /> :
                    <>
                        <section className="top-banner d-flex align-items-center">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                                        <div>
                                            <h1 className="heading1">
                                                Enjoy Your <br />
                                                Delicious Meal
                                            </h1>
                                            <p className="para-01">Food from the best Restaurants to your doorstep<br />
                                                Order your favourite restaurant or dish<br />
                                                and we will deliver it you in no time...</p>
                                            <div className={classes.button} id="btn2">
                                                <Button className={classes.button1} variant="contained" size="large">
                                                    Explore Restraunts
                                                </Button>
                                                <Button className={classes.button2} id="Explore-Menu" size="large">
                                                    Explore Menu
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid" src={img1} />
                                    </div>
                                </div>
                            </div>
                        </section>


                        =========== 2 Order food start ===========


                        <section className={classes.Orderfood}>
                            <div className="container">
                                <div className="Order-food p-4">
                                    <div className="text-center">
                                        <Typography>
                                            <Box color="#344767" component="h2">Order the Food</Box>
                                            <Box component="h2" color="#85b767">In 3 Simple Steps !</Box>
                                        </Typography>
                                    </div>
                                    <div className="row mt-5 d-flex justify-content-around">
                                        <div className="col-md-3 text-center">
                                            <img src={location} className="img-fluid mb-2 Order-food-img " />
                                            <Typography>
                                                <Box color="#344767" className=" mt-2" component="h2">Set Location</Box>
                                            </Typography>
                                            <p>Add your location<br />
                                                to get the food delivered</p>
                                        </div>

                                        <div className="col-md-3 text-center">
                                            <img src={foodtray} className="img-fluid mb-2 Order-food-img" />
                                            <Typography>
                                                <Box color="#344767" className=" mt-2" component="h2">Select Dish</Box>
                                            </Typography>
                                            <p>Select your dish from<br />
                                                your favourite restauran</p>
                                        </div>

                                        <div className="col-md-3 text-center">
                                            <img src={motorcycle} className="img-fluid mb-2 Order-food-img" />
                                            <Typography>
                                                <Box color="#344767" className=" mt-2" component="h2">Chekout</Box>
                                            </Typography>
                                            <p>Pay with your desired payment<br />
                                                method and order is at your
                                                door</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* =========== 2 Order food end =========== */}

                        {/* =========== 3  Download App start ============ */}
                        <section className="pt-5">
                            <div className="container max-width1">
                                <div className="row ">
                                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                                        <div>
                                            <div className="section-title">
                                                <h2 className=" heading text-center">Download the App <br />
                                                    Click and <br />
                                                    Enjoy your Meal
                                                </h2>
                                            </div>
                                            <div className="row d-flex justify-content-center align-items-center text-center">
                                                <img src={appstore} className=" appstore-logo img-fluid" />
                                                <img src={playstore} className="playstore-logo img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src={phone} className="img-fluid" id="phone-img" alt="mobile-app" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* =========== 3  Download App end ============ */}

                        {/*  ============ 4 want more start here ========================== */}
                        <section className="want-more">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-12 text-center" >
                                        <div className="bonus-card">
                                            <div className="benifit-icon">
                                                <img src={gift} alt="get bonus logo..." />
                                            </div>
                                            <div className="benifit-desc">
                                                <h4>Get Bonus</h4>
                                                <p className="mt-5">
                                                    Get stamps, promotions, discounts,<br />
                                                    news and more through our<br />
                                                    newsletters and social channels<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12 text-center" >
                                        <div className="bonus-card">
                                            <div className="benifit-icon">
                                                <img src={gift} alt="get bonus logo..." />
                                            </div>
                                            <div className="benifit-desc">
                                                <h4>Your Warranty</h4>
                                                <p className="mt-5">
                                                    Great service, absolutely free <br />
                                                    Authentic user reviews<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12 text-center" >
                                        <div className="bonus-card">
                                            <div className="benifit-icon">
                                                <img src={gift} alt="get bonus logo..." />
                                            </div>
                                            <div className="benifit-desc">
                                                <h4>Your Benifits</h4>
                                                <p className="mt-5">
                                                    2600+ partner restaurants to choose from Pay in cash or online Order where you want, whenever you want
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="want-more-section">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
                                                <div className="text-center">
                                                    <h2 className="heading">Want More ?</h2>
                                                    <p id="para-id">Check out our exciting articles<br />on
                                                        food and lifestyle on our blog.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div  >
                                                    <img className="img-fluid " src={computer} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ======================== want more end here ========================== */}
                    </>
            }

        </>
    );
}
export default Home;