import React from 'react';

function Product({ label, source, alt, description, price }) {
    return (
        <article>
            <span>{label}</span>
            <img src={source} alt={alt}/>
            <p>{description}</p>
            <h4>{price}</h4>
        </article>

    );
}

export default Product;