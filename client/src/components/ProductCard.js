import React from "react";

function renderImage(imgSrc){
    return (
        <div>
            <img src={imgSrc} width="20px" height="20px"></img>
        </div>
    )
}

const ProductCard = ({ id, name, description, imgLinks, price, category, editButton, deleteButton }) => (
    <tr data-id={id} id={id}>
        <td>{name}
            <button onClick={editButton}>Edit</button>
            <button onClick={deleteButton}>Delete</button>
        </td>
        <td>{description}</td>
        <td>{category}</td>
        <td>
            {imgLinks.map(img => {
                return renderImage(img);
            })}
        </td>
        <td>${price}</td>
    </tr>
);

export default ProductCard;