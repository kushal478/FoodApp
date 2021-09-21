import React from 'react';


class ShopingCard extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            product:{
                id:101,
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHnncplLhNw7aWsfFfzZia9KpQWbjEdUWpg&usqp=CAU",
                name:"Smart Watch",
                price:1500,
                qty:2,
                total:2000
            }
        }
    }

    Increment=()=>
    {
        this.setState(
            {
                product: {
                    ...this.state.product,
                    qty:this.state.product.qty+1
                }
            }
        )
    }

    Decrement=()=>
    {
        this.setState(
            {
                product: {
                    ...this.state.product,
                    qty:this.state.product.qty-1>0 ? this.state.product.qty-1 : 1
                }
            }
        )
    }

   




       
    render()
    {
        return(
            <React.Fragment>
                <section className='mt-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h2 className='h2 text-info'>Card-Item</h2>
                                <p className='h2'> This is My Item This is My Item This is My Item This is My Item This is My Item This is My Item This is My Item This is My Item This is My Item</p>

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
                                            <th>S.no</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                        

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.product.id}</td>
                                            <td>
                                                <img src={this.state.product.image} alt='vishnu' className='img-fluid'/>
                                            </td>
                                            <td>{this.state.product.name}</td>
                                            <td>&#8377;{this.state.product.price}</td>
                                            <td><i className="fa fa-minus-square px-2" onClick={this.Decrement} aria-hidden="true"/>

                                                {this.state.product.qty}

                                                <i class="fa fa-plus-square px-2" onClick={this.Increment} aria-hidden="true"/>
                                            </td>
                                            <td>&#8377;{(this.state.product.qty)*(this.state.product.price)}</td>
                                        </tr>                                       
                                    </tbody>
                                </table>   
                            </div>
                        </div>
                    </div>                                
                </section>
                        

               
            </React.Fragment>   
        )
    }
}




export default ShopingCard;