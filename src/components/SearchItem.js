import React from "react";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOption">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">
            Entire Studio - 1 bathroom - 21 square meters - 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="CancelOpSubtitle">
            You can cancel later, so lock in this great price today !
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$112</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>

        </div>
      
      
      
      
      
      </div>
    </div>
  );
};

export default SearchItem;
