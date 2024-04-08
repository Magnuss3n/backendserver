import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Welcome to MGNzone!

                    Discover luxury redefined with our handpicked collection of premium products from top brands worldwide. Each item embodies quality, craftsmanship, and sophistication, ensuring you the best in every purchase.

                    Shop confidently knowing that our curated selection offers the finest in textiles, accessories, and more. As we continue to grow, expect even more prestigious brands and exclusive collections to elevate your shopping experience.

                    Join us on a journey of luxury and convenience. Shop now and experience excellence like never before at MGNzone.

                    Best regards,
                    Lavanye Singh
                    Owner, MGNzone
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;