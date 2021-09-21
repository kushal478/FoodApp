import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './SkeletonCss.css';

import gift from '../../assets/food-app-img/gift.png'
import computer from '../../assets/food-app-img/computer.png';

function HomeSkeleton(props) {
    return (
        <div>




            <section className="top-banner d-flex align-items-center">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className="heading1">
                                    <Stack spacing={1}>
                                        <Skeleton variant="h1" width={300} />
                                        <Skeleton variant="h1" />
                                    </Stack>
                                </h1>
                                <p className="para-01">
                                    <Stack spacing={1}>
                                        <Skeleton variant="p" />
                                        <Skeleton variant="p" />
                                        <Skeleton variant="p" />
                                    </Stack>
                                </p>
                                <div id="btn2">
                                    <Button  >
                                        <Skeleton variant="rectangular" width={184} height={40} />
                                    </Button>
                                    <Button >
                                        <Skeleton variant="rectangular" width={184} height={40} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Skeleton variant="rectangular" className="img-fluid" width={530} height={350} />
                        </div>
                    </div>
                </div>
            </section >

            {/* =========== 2 Order food start =========== */}

            <section >
                <div className="container">
                    <div className="Order-food p-4">
                        <div style={{ marginLeft: 350 }}>
                            <Box component="h2" className="col-md-6"><Skeleton variant="h2" ml={500} /></Box>
                            <Box component="h2" className="col-md-6"><Skeleton variant="h2" ml={500} /></Box>
                        </div>
                        <div className="row mt-5 d-flex justify-content-around">
                            <div className="col-md-3 text-center">
                                <Skeleton variant="circular"
                                    style={{ marginLeft: 70 }} className="img-fluid" width={100} height={100} />
                                <Typography>
                                    <Box color="#344767" className=" mt-2" component="h2"><Skeleton variant="h2" /></Box>
                                </Typography>

                                <p className="para-01">
                                    <Stack spacing={1}>
                                        <Skeleton variant="p" />
                                        <Skeleton variant="p" />
                                    </Stack>
                                </p>
                            </div>
                            <div className="col-md-3 text-center">
                                <Skeleton variant="circular"
                                    style={{ marginLeft: 70 }} className="img-fluid" width={100} height={100} />
                                <Typography>
                                    <Box color="#344767" className=" mt-2" component="h2"><Skeleton variant="h2" /></Box>
                                </Typography>

                                <p className="para-01">
                                    <Stack spacing={1}>
                                        <Skeleton variant="p" />
                                        <Skeleton variant="p" />
                                    </Stack>
                                </p>
                            </div>
                            <div className="col-md-3 text-center">
                                <Skeleton variant="circular"
                                    style={{ marginLeft: 70 }} className="img-fluid" width={100} height={100} />
                                <Typography>
                                    <Box color="#344767" className=" mt-2" component="h2"><Skeleton variant="h2" /></Box>
                                </Typography>

                                <p className="para-01">
                                    <Stack spacing={1}>
                                        <Skeleton variant="p" />
                                        <Skeleton variant="p" />
                                    </Stack>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========== 2 Order food end =========== */}

            {/* =========== 3  Download App start ============ */}
            <section className="py-5 ">
                <div className="container max-width1">
                    <div className="row ">
                        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                            <div>
                                <div className="section-title heading">
                                    <Stack spacing={1}>
                                        <Skeleton variant="h2" />
                                        <Skeleton variant="h2" style={{ marginLeft: 90 }} width={220} />
                                        <Skeleton variant="h2" style={{ marginLeft: 30 }} width={340} />
                                    </Stack>
                                </div>
                                <div className="row d-flex align-items-center mt-2">
                                    <div className="col-md-6">
                                        <Skeleton variant="rectangular" className="skel-appstore-logo img-fluid mt-2" width={170} height={55} />
                                    </div>
                                    <div className="col-md-6">
                                        <Skeleton variant="rectangular" className=" skel-playstore-logo img-fluid mt-2" width={170} height={55} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <Skeleton variant="rectangular" className="skel-phone-img img-fluid mt-2" width={400} height={674} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =========== 3  Download App end ============ */}

            {/* ============ 4 want more start here ========================== */}
            <section className="want-more">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 text-center" >
                            <div className="bonus-card">
                                <div className="benifit-icon">
                                    <Skeleton variant="circular" width={100} height={100} />
                                </div>
                                <div className="benifit-desc">

                                    <h4> <Skeleton variant="h4" /></h4>
                                    <p className="mt-5">
                                        <Stack spacing={1} >
                                            <Skeleton variant="p" />
                                            <Skeleton variant="p" id="skel-card-paraline2" style={{ marginLeft: 50 }} />
                                            <Skeleton variant="p" style={{ marginLeft: 20 }} id="skel-card-paraline3" />
                                        </Stack>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center" >
                            <div className="bonus-card">
                                <div className="benifit-icon">
                                    <Skeleton variant="circular" width={100} height={100} />
                                </div>
                                <div className="benifit-desc">

                                    <h4> <Skeleton variant="h4" /></h4>
                                    <p className="mt-5">
                                        <Stack spacing={1} >
                                            <Skeleton variant="p" />
                                            <Skeleton variant="p" id="skel-card-paraline2" style={{ marginLeft: 50 }} />
                                            <Skeleton variant="p" style={{ marginLeft: 20 }} id="skel-card-paraline3" />
                                        </Stack>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center" >
                            <div className="bonus-card">
                                <div className="benifit-icon">
                                    <Skeleton variant="circular" width={100} height={100} />
                                </div>
                                <div className="benifit-desc">

                                    <h4> <Skeleton variant="h4" /></h4>
                                    <p className="mt-5">
                                        <Stack spacing={1} >
                                            <Skeleton variant="p" />
                                            <Skeleton variant="p" id="skel-card-paraline2" style={{ marginLeft: 50 }} />
                                            <Skeleton variant="p" style={{ marginLeft: 20 }} id="skel-card-paraline3" />
                                        </Stack>
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
                                        <h2 className="heading">
                                            <Skeleton variant="h2" style={{ marginLeft: 30 }} width={300} />
                                        </h2>
                                        <p id="para-id">
                                            <Stack spacing={1} >
                                                <Skeleton variant="p" width={360} />
                                                <Skeleton variant="p" style={{ marginLeft: -20 }} width={400} />
                                            </Stack>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div  >
                                        <Skeleton variant="rectangular" className="skel-phone-img img-fluid" width={520} height={330} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================== want more end here ========================== */}




        </div >
    );
}

export default HomeSkeleton;


