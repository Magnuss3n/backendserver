import React, { useEffect, useState } from 'react';
import './NewCollections.css'
//import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'


const NewCollections = () => {
    const [new_collection, setNew_collection] = useState([]);
    const server="https://e-commerce-project-do5w.vercel.app"

    useEffect(() => {
        fetch(`${server}/newcollection`).then((response) => response.json()).then((data) => setNew_collection(data));
    }, [])

    function extractImageName(url) {
        // Match the image name in the URL
        const regex = /\/([^\/]+)\.png$/;
        const match = url.match(regex);
    
        // If a match is found, return the image name
        if (match && match.length > 1) {
            return match[1];
        } else {
            // Return null if no match is found
            return null;
        }
    }
    
    // Example usage:
    const imageUrl = "http://localhost:4000/images/product_1712409574873.png";
    const imageName = extractImageName(imageUrl);
    console.log(imageName); // Output: product_1712409574873
    
    new_collection.map(data=>console.log(data.image))
    // console.log(new_collection.map(),'newCollection');
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => 
                    <Item key={i} id={item.id} name={item.name} image={`./images/${imageName}.png`} new_price={item.new_price} old_price={item.old_price} />
                )}
            </div>
        </div>
    )
}

export default NewCollections;