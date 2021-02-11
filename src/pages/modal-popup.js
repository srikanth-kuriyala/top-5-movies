import React from "react";

// Class modal popup to the movie content
function ModalPopup(props) {
    const {title, rank, imageUrl, synopsis, releaseDate} = props.item;
    return (
        <React.Fragment>
        {props.show && (
            <div className="modal">
                <div>
                    <button onClick={props.onHide}>X</button>
                    <img src={imageUrl} alt={title}/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>Release date: {releaseDate}</p><p>Rank: {rank}</p>
                    <p>{synopsis}</p>
                </div>
            </div>
        )}
        </React.Fragment>
    );
}

export default ModalPopup;