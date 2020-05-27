import { UPDATE_STATE, CREATE_COUNTRIES, TOGGLE, CREATE_LIST } from "./actions";
import { combineReducers } from 'redux'


const reducerScores = (state=[], action) => {
    if(action.type === UPDATE_STATE) {
        return state = action.payload
    }
    if(action.type === TOGGLE) {
        state.arr.forEach(game => {
            if(game.fixture_id === action.payload.game.fixture_id) {
                game.isLiked = action.payload.isLiked
            }

        })
        return state
    }

    return state
}

const reducerCountries = (state=[], action) => {
    if(action.type === CREATE_COUNTRIES) {
        let tempArr = [];
        let idTemp = [];
        action.payload.forEach(game => {
            
            if(idTemp.indexOf(game.league_id) === -1 ) {
                // tempArr.push(game.league)
                game.league.id = game.league_id
                tempArr = [...tempArr, game.league]
            }
            idTemp.push(game.league_id)
        })
        // console.log(tempArr)
        return tempArr
    }
    
    return state;
}

const reducerList = (state=[], action) => {
    if(action.type === CREATE_LIST) {
        return state = action.payload
    }

    return state
}

export default combineReducers({
    reducerScores,
    reducerCountries,
    reducerList
})