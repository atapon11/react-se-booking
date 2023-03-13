import React from "react";

const PropertyList = () => {
  return <div className="propertyList">
    <div className="propertyItem">
    <img 
            src='https://source.unsplash.com/225x250/?hotel&sig1'
             className='propertyImg'
            />    
            <div className='propertyTitle'>
                <h1>Hotels</h1>
                <h2>450 hotels</h2>
            </div>
    </div>
    <div className="propertyItem">
    <img 
            src='https://source.unsplash.com/225x250/?apartments&sig1'
             className='propertyImg'
            />    
            <div className='propertyTitle'>
                <h1>apartments</h1>
                <h2>450 apartments</h2>
            </div>
    </div>
    <div className="propertyItem">
    <img 
            src='https://source.unsplash.com/225x250/?villas&sig1'
             className='propertyImg'
            />    
            <div className='propertyTitle'>
                <h1>villas</h1>
                <h2>450 villas</h2>
            </div>
    </div>
    <div className="propertyItem">
    <img 
            src='https://source.unsplash.com/225x250/?resort&sig1'
             className='propertyImg'
            />    
            <div className='propertyTitle'>
                <h1>resort</h1>
                <h2>450 resort</h2>
            </div>
    </div>
    <div className="propertyItem">
    <img 
            src='https://source.unsplash.com/225x250/?cabins&sig1'
             className='propertyImg'
            />    
            <div className='propertyTitle'>
                <h1>cabins</h1>
                <h2>450 cabins</h2>
            </div>
    </div>
    </div>;
};

export default PropertyList;
