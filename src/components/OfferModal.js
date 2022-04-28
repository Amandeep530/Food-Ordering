import React from 'react';
import ReactDOM from 'react-dom';
import DealCard from './DealCard';

function OfferModal() {
    const deals=[{text:" Rs. 100 off", desc:"on bill value of 599 or more"},
    {text:"Rs. 200 off", desc:"on bill value of 999 or more"},
    {text:"Rs. 300 off", desc:"on bill value of 1300 or more"}]
    return ReactDOM.createPortal(
<div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offerModal">
        <div className="offcanvas-header border-bottom text-center" style={{backgroundColor:"yellow"}}>
          <h2 className="offcanvas-title" id="offerModal">Offers & Deals</h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body px-3 pt-3">
          {deals.map(data=>
          <div className="container" key={data.text}>
           <DealCard {...data}/> 
          </div>
    )}
         <hr/>
        </div>
      </div>,
 document.getElementById('modal-root')
    )
}

export default React.memo(OfferModal)
