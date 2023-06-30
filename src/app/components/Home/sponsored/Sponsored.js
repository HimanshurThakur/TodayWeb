import React from "react";
import "./Sponsored.css";

function Sponsored() {
  return (
    <div>
      <div className="Banners">
        <div className="banner">
          <img
            className="bannerImg"
            src="https://static.toiimg.com/photo/91664953.cms"
            alt=""
          />
        </div>
        <div className="banner">
          <img
            className="bannerImg"
            src="https://media.istockphoto.com/id/1318478175/photo/vegan-raw-vegetables-on-green-wooden-table-background.webp?b=1&s=170667a&w=0&k=20&c=cn_60g2tMmsNIQd8bVevCfnzPWvrwJGS30M0hiDB9Ng="
            alt=""
          />
        </div>
        <div className="banner">
          <img
            className="bannerImg"
            src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature_thumb.jpg?sfvrsn=aa2422a6_4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsored;
