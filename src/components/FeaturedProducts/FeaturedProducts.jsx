import React from "react";
import "./FeaturedProducts.css"
import Card from "../Card/Card";

const FeaturedProducts = () => {

    const data = [
        {
            "id": 1,
            "name": "Men's Casual Shirt",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/56/68/566842cbd51513b015877996243564c6326dab00.jpg],origin[dam],category[ladies_basics_cardigansjumpers],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
            "image2": "https://lp2.hm.com/hmgoepprod?set=source[/c8/89/c8894def226238aa444e7ff5be3a2307f6262038.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
            "old_price": 39.99,
            "price": 29.99,
            "isNew":true
        },
        {
            "id": 2,
            "name": "Women's Summer Dress",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/3b/3a/3b3ae40391948365c77e9591eaf32d7f3dbb5eae.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
            "old_price": 49.99,
            "price": 39.99,
            "isNew":true
        },
        {
            "id": 3,
            "name": "Men's Running Shoes",
            
            "image": "https://image.hm.com/ffc/share/assets/2023/1008/men/3128_LB_14A_3x4.jpg?imwidth=564",
            "old_price": 79.99,
            "price": 59.99,
            "isNew":false
        },
        {
            "id": 4,
            "name": "Women's Jeans",
            "image": "https://image.hm.com/assets/hm/c1/fc/c1fc622a9aa0289699136961d0de9d261e221b92.jpg?imwidth=2160",
            "old_price": 59.99,
            "price": 49.99,
            "isNew":false
        }
    ]


    return (
        <div className="featured-products">
            <div className="heading">
                <h2 className="item">Featured Products</h2>
                <span className="item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nisi vulputate, egestas lectus tincidunt, ultrices urna. Vestibulum convallis mi enim, eu tempus urna tincidunt vel.</span>
            </div>
            <div className="desc">
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}

            </div>
        </div>
    )
}


export default FeaturedProducts