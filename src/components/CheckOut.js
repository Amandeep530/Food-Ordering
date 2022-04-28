import React from 'react'
import DeliveryInfo from './DeliveryInfo'

function CheckOut() {
    //console.log("checkout rendered");
    return (
        <div className="checkOutOrder">
            <div className="d-flex align-items-center">
            <img className="checkOutOrderImg img-responsive" src="https://img.freepik.com/free-psd/delivery-service-banner-3d-illustration_1419-2395.jpg?t=st=1651161107~exp=1651161707~hmac=424f0214a56726906ca22f8f43a3658aa55279df8f5182537ef985437527b664&w=740" alt="" />
            <DeliveryInfo/>
            </div>
        </div>
    )
}

export default React.memo(CheckOut)
