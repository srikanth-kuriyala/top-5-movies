import ACTIONS from "./action";
import _ from "lodash";
import data from "../top5MoviesAssessement.json";

const movies = data.components[1];
const defaultState = {
    order: "",
    items: movies.items,
    showModal: 0
}

const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.MOVIE_LIST:
            let payload = action.items.items ? action.items.items : state.items;
            
            var newState = _.cloneDeep(state);
            newState.order = action.order;
            var items = payload.sort(function(a, b) { return a[newState.order] - b[newState.order] })
            newState.items = items;
            return newState;

        case ACTIONS.Types.GET_MODAL:
            var movieID = action.payload;
            newState = _.cloneDeep(state);
            newState.showModal = movieID;
            return newState;

        case ACTIONS.Types.HIDE_MODAL:
            newState = _.cloneDeep(state);
            newState.showModal = action.payload;
            return newState;

        default:
            return state;
    }
}

export default movieReducer;