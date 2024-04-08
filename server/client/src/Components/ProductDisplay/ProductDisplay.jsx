import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;

    const { addToCart } = useContext(ShopContext)
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(21)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Introducing our Men's joggers, the perfect blend of comfort and style. Crafted with a combination of 60% cotton and 40% polyester, these joggers offer a soft and breathable feel, ideal for all-day wear.
                    The straight fit of the joggers ensure a comfortable and unrestricted movement, while beige the colour adds a versatile touch to any outfit. With boxy side pockets and soft elasticated waistband - these joggers exude a trendy and edgy vibe. Whether you're heading to the gym or running errands, our Men's shorts are the go-to choice for a fashionable and relaxed summer ensemble.

                    Fabric: 60% Cotton 40% Polyester

                    Fit Type: Oversized Fit

                    Pattern: Utility Pockets

                    Care Instructions: Wash dark colours separately. Machine wash, gentle cycle. Do not bleach. Tumble dry low. Iron on lowest setting. Do not scrub or iron on print directly.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category: </span>{product.category}</p>
                <p className="productdisplay-right-category"><span>Tags: </span>Modern,</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
