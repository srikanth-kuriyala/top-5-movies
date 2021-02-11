import React, { Component } from "react";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import ModalPopup from "./modal-popup";
import data from "../top5MoviesAssessement.json";

const movies = data.components[1];

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            showModal: 0
        }
        this.handleOrderBy = this.handleOrderBy.bind(this);
    }
    componentDidMount() {
        this.props.movieList('releaseDate', movies);
    }

    handleOrderBy(event) {
        this.props.movieList(event.target.value, movies);
    }

    getModal = value => {
        this.setState({ showModal: value });
    };

    hideModal = value => {
        this.setState({ showModal: 0 });
    };

    render() {
        return (
            <div>
                <span>Order By : </span>
                <select onChange={this.handleOrderBy}>
                    { data.components[0] ? data.components[0].items.map((item, index) => (
                        <option key={item.id} value={item.valueToOrderBy}>{item.label}</option>
                    )) : ''}
                </select>
                <ul>
                    { this.props.items ?
                        this.props.items.map((item, index) => (
                            <li key={item.id}>
                                <img src={item.imageUrl} onClick={() => this.getModal(item.id)} alt={item.title}/>
                                <h2>{item.title}</h2>
                                <ModalPopup item={item} show={this.state.showModal === item.id} onHide={()=> this.hideModal(item.id)}/>
                            </li>
                        ))
                    :
                        <p>No movies found!</p>
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        items: state.items,
        order: state.order
    })
};

const mapDispatchToProps = dispatch => ({
    movieList: (order, items) => dispatch(ACTIONS.movieList(order, items))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);