import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const navigate = useNavigate()
    const purchase = () => {
        navigate('/purchaseDone')
    }
    return (
        <>
            <div className="container">
                <div className="checkout">

                    <h3 className="text-center mb-5">Check out </h3>

                    <div className="row justify-content-center" >
                        <div className="col-7">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Name</label>
                                    <input required type="text" class="form-control" id="inputPassword4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input required type="email" class="form-control" id="inputEmail4" />
                                </div>

                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Card Number</label>
                                    <input required type="text" class="form-control" id="inputPassword4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Card Exp Date</label>
                                    <input required type="text" class="form-control" id="inputEmail4" />
                                </div>


                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input required type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div class="col-12 ">
                                    <input required onClick={purchase} type="submit" className='checkOutButton d-block mx-auto' value="Purchase" />
                                </div>



                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Checkout;