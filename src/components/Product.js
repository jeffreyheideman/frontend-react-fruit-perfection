import React from 'react';
import citroenen from "../assets/citroenen.jpeg";


function Product(props) {
    return (
        <article className="product">
            <img
                src={props.image}
                alt={props.name}
            />
            <h2 className="product-name">{props.name}</h2>
            <p className="product-description">
                {props.description}
            </p>
        </article>
    )
}

export default Product;