import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://static.zara.net/photos///2023/I/0/1/p/8030/484/330/2/w/600/8030484330_2_1_1.jpg?ts=1687348745192"
            alt=""
          />
          <button className="hvr-underline-reveal ">
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://static.zara.net/photos///2023/I/0/1/p/3641/823/670/2/w/600/3641823670_1_1_1.jpg?ts=1693826570924"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://static.zara.net/photos///2023/I/0/1/p/5107/368/250/17/w/600/5107368250_2_2_1.jpg?ts=1686739886883"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            
              <img
                src="https://static.zara.net/photos///2023/I/0/1/p/3564/176/800/2/w/600/3564176800_1_1_1.jpg?ts=1693822652066"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            
          </div>
          <div className="col">
            
              {" "}
              <img
                src="https://static.zara.net/photos///2023/I/0/1/p/7223/245/400/2/w/600/7223245400_2_3_1.jpg?ts=1692690783535"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
           
          </div>
        </div>
        <div className="row">
          <img
            src="https://static.zara.net/photos///2023/I/0/1/p/9479/256/805/17/w/1920/9479256805_1_1_1.jpg?ts=1687533946961"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;