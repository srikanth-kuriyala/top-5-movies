import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
    order: "",
    items: []
}

const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.MOVIE_LIST:
            let payload = action.items.items ? action.items.items : state.items;
            
            let newState = _.cloneDeep(state);
            newState.order = action.order;
            var items = payload.sort(function(a, b) { return a[newState.order] - b[newState.order] })
            newState.items = items;
            return newState;

        default:
            return state;
    }
}

export default movieReducer;