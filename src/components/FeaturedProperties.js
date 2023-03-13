import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="featuredproperties">
      <div className="featuredpropertiesItem">
        <img
          src="https://source.unsplash.com/250x250/?hotel&sig1"
          className="featuredpropertiesImg"
        />
        <div className="featuredpropertiesTitle">
          <h2>Nantachai Hotels</h2>
          <h1>Bangkok</h1>
          <h2>Starting from 500$</h2>
          <button>8.8</button>&nbsp;&nbsp;&nbsp;
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredpropertiesItem">
        <img
          src="https://source.unsplash.com/250x250/?apartments&sig1"
          className="featuredpropertiesImg"
        />
        <div className="featuredpropertiesTitle">
          <h2>Apartments MossZy</h2>
          <h1>Paris</h1>
          <h2>Starting from 100$</h2>
          <button>9.3</button>&nbsp;&nbsp;&nbsp;
          <span>Excellentional</span>
        </div>
      </div>
      <div className="featuredpropertiesItem">
        <img
          src="https://source.unsplash.com/250x250/?villas&sig1"
          className="featuredpropertiesImg"
        />
        <div className="featuredpropertiesTitle">
          <h2>Tomon Villas</h2>
          <h1>Tokyo</h1>
          <h2>Starting from 1200$</h2>
          <button>8.8</button>&nbsp;&nbsp;&nbsp;
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredpropertiesItem">
        <img
          src="https://source.unsplash.com/250x250/?resort&sig1"
          className="featuredpropertiesImg"
        />
        <div className="featuredpropertiesTitle">
          <h2>Resort JayZing</h2>
          <h1>Berlin</h1>
          <h2>Starting from 5500$</h2>
          <button>9.3</button>&nbsp;&nbsp;&nbsp;
          <span>Excellentional</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
