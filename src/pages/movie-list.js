import React, { Component } from "react";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import ModalPopup from "./modal-popup";
import data from "../top5MoviesAssessement.json";

const movies = data.components[1];

function MovieList(props) {
    return (
        <div>
            <span>Order By : </span>
            <select onChange={(event) => props.movieList(event.target.value, movies)}>
                { data.components[0] ? data.components[0].items.map((item, index) => (
                    <option key={item.id} value={item.valueToOrderBy}>{item.label}</option>
                )) : ''}
            </select>
            <ul>
                { props.items ?
                    props.items.map((item, index) => (
                        <li key={item.id}>
                            <img src={item.imageUrl} onClick={() => props.getModal(item.id)} alt={item.title}/>
                            <h2>{item.title}</h2>
                            <ModalPopup item={item} show={props.showModal === item.id} onHide={()=> props.hideModal()}/>
                        </li>
                    ))
                :
                    <p>No movies found!</p>
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.items,
    order: state.order,
    showModal: state.showModal
})

const mapDispatchToProps = dispatch => ({
    movieList: (order, items) => dispatch(ACTIONS.movieList(order, items)),
    getModal: (id) => dispatch(ACTIONS.getModal(id)),
    hideModal: () => dispatch(ACTIONS.hideModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);