import React from "react";

function renderImage(imgSrc){
    return (
        <div>
            <img src={imgSrc} width="20px" height="20px"></img>
        </div>
    )
}

const ProductCard = ({ id, name, description, imgLinks, price }) => (
    <tr data-id={id} id={id}>
        <td>{name}</td>
        <td>{description}</td>
        <td>
            {imgLinks.map(img => {
                return renderImage(img);
            })}
        </td>
        <td>${price}</td>
    </tr>
);

export default ProductCard;