import React from 'react';

class Cart extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            product:{
                item:"watch",
                price:1000,
                qty:1,
                discount:10,
                total:1000
            }
        }
    }
    render()
    {
        return(
            <React.Fragment>
                <section className='container'>
                    <div>
                        <h2 className='h2 text-danger'>My-Cart</h2>
                        <p className='h2'>My Cart Item In The Below:</p>
                    </div>
                </section>
                <section className='container'>
                    <table className='table table-bordered text-center'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>item</th>
                                <th>price</th>
                                <th>qty</th>
                                <th>discount</th>
                                <th>total</th>
                            </tr>
                        </thead>

                        <tbody className='bg-light'>
                            <tr>
                                <td>{this.state.product.item}</td>
                                <td>{this.state.product.price}</td>
                                <td>{this.state.product.qty}</td>
                                <td>{this.state.product.discount}</td>
                                <td>{this.state.product.total}</td>
                            </tr>
                        </tbody>
                    </table>

                </section>
                
            </React.Fragment>
            
        )
    }

}
export default Cart;