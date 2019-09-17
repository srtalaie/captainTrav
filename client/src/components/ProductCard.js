import React from "react";

function renderImage(imgSrc){
    return (
        <div>
            <img src={imgSrc} width="20px" height="20px" style={imgStyle}></img>
        </div>
    )
}

const imgStyle = {
    margin: "5px"
}

const imageDivStyle = {
    display: "flex"
}

const nameDivStyle = {
    display: "flex",
    flexDirection: "column"
}

const ProductCard = ({ id, name, description, imgLinks, price, category, editButton, deleteButton }) => (
    <tr data-id={id} id={id}>
        <td>
            <div style={nameDivStyle}>
            {name}
            <button onClick={editButton}>Edit</button>
            <button onClick={deleteButton}>Delete</button>
            </div>
        </td>
        <td>{description}</td>
        <td>{category}</td>
        <td>
            <div style={imageDivStyle}>
            {imgLinks.map(img => {
                return renderImage(img);
            })}
            </div>
        </td>
        <td>${price}</td>
    </tr>
);

export default ProductCard;