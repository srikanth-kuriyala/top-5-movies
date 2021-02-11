// types of action
const Types = {
    MOVIE_LIST: "movie-list",
    GET_MODAL: "get-modal",
    HIDE_MODAL: "hide-modal"
};

// actions
const movieList = (order, items) => ({
    type: Types.MOVIE_LIST,
    items: items,
    order: order
});

const getModal = (id) => ({
    type: Types.GET_MODAL,
    payload: id
});

const hideModal = () => ({
    type: Types.HIDE_MODAL,
    payload: 0
});

const Actions = {
    movieList,
    getModal,
    hideModal,
    Types
};

export default Actions;