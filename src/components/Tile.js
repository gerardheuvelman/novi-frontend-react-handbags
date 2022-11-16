import React from 'react';

function Tile({image, alt, children}) {

    return (
        <section>
            {image && <img src={image} alt={alt}/>}
            {children}
        </section>
    );
}

export default Tile;