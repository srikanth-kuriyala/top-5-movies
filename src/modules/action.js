// types of action
const Types = {
    MOVIE_LIST: "movie-list"
};

// actions
const movieList = (order, items) => ({
    type: Types.MOVIE_LIST,
    items: items,
    order: order
});

const Actions = {
    movieList,
    Types
};

export default Actions;