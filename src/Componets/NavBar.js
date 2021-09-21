import React, { useEffect, useState } from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import cart from '../assets/food-app-img/cart.png';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


function NavBar(props) {

    const [isLoding, setisLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => { setisLoding(false) }, 2000)
    }, [])



    const useStyles = makeStyles((theme) => ({
        search: {
            position: 'relative',
            height: '50px',
            boxShadow: '-1px 2px 5px 0 #bfbfbf',
            borderRadius: '30px',
            display: 'flex',
            padding: " 0!important",
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            borderRadius: '10px',
            // padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            // [theme.breakpoints.up('md')]: {
            //     width: '150px',
            // },
        },
        // root: {
        //     '& > * + *': {
        //         marginLeft: theme.spacing(2),
        //     },
        // },
    }));


    const classes = useStyles();


    return (
        <>


            {/* <section>
                    <div className="container-fluid   hide-nav my-3">
                        <div className="row d-flex  align-items-center justify-content-start">
                            <div className="col-lg-2 col-md-2"></div>
                            <div className="col-lg-7 col-md-7">
                                <Typography className={classes.root} className=" row d-flex text-center" >
                                    <Link href="#" color="inherit" className="col-md-3 navbar-item">
                                        <Skeleton variant="a" />
                                    </Link>
                                    <Link href="#" color="inherit" className="col-md-3 navbar-item">
                                        <Skeleton variant="a" />
                                    </Link>
                                    <Link href="#" color="inherit" className="col-md-3 navbar-item">
                                        <Skeleton variant="a" />
                                    </Link>
                                    <Link href="#" color="inherit" className="col-md-3 navbar-item">
                                        <Skeleton variant="a" />
                                    </Link>
                                </Typography>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <Skeleton variant="a" id="skel-search" />
                            </div>
                        </div>
                    </div>
                </section> */}



            <section>
                <div className="container-fluid   hide-nav my-3">
                    <div className="row d-flex  align-items-center justify-content-start">
                        <div className="col-lg-2 col-md-2"></div>
                        <div className="col-lg-7 col-md-7">
                            <Typography className={classes.root} className=" row d-flex text-center" >
                                <Link href="#" color="inherit" className="col-md-3 navbar-item">
                                    {isLoding ? <Skeleton variant="a" /> : "Home"}
                                </Link>
                                <Link href="#" color="inherit" className="col-md-3 navbar-item">
                                    {isLoding ? <Skeleton variant="a" /> : "Dishes"}
                                </Link>
                                <Link href="#" color="inherit" className="col-md-3 navbar-item">
                                    {isLoding ? <Skeleton variant="a" /> : "Restaurants"}
                                </Link>
                                <Link href="#" color="inherit" className="col-md-3 navbar-item">
                                    {isLoding ? <Skeleton variant="a" /> : "Contact"}
                                </Link>
                            </Typography>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            {isLoding ? <Skeleton variant="a" id="skel-search" /> :
                                <Toolbar>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon />
                                        </div>
                                        <InputBase
                                            placeholder="Search…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                        <div className="cart">
                                            <img src={cart} />
                                        </div>
                                    </div>
                                </Toolbar>
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default NavBar;