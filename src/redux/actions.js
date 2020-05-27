export const UPDATE_STATE = "UPDATE_STATE";
export const CREATE_COUNTRIES = "CREATE_COUNTRIES";
export const TOGGLE = "TOGGLE";
export const CREATE_LIST = "CREATE_LIST";

export const updateState = (arr, isLoaded = true) => (
    {
        type: UPDATE_STATE,
        payload: {arr, isLoaded}
    }
);

export const createCountries = arr => (
    {
        type: CREATE_COUNTRIES,
        payload: arr
    }
);

export const toggle = (game, isLiked=false) => (
    {
        type: TOGGLE,
        payload: {game, isLiked}
    }
);

export const createList = arr => (
    {
        type: CREATE_LIST,
        payload: arr
    }
)


export const fetchApi = (url) => dispatch => {

    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "05da0dc747msh09150755268e421p148c8djsna768d3fd2802"
        }
    })
    .then(res => res.json())
    .then(data => {
        const tempArr = [];

        data.api.fixtures.forEach(game => {
            if(game.status !== "Match Postponed" && game.status !== "Match Cancelled") {
                tempArr.push(game)
            }
        })

        dispatch(updateState(tempArr));
        dispatch(createCountries(tempArr));
    })
    .catch(err => console.log(err));

}

export const fetchApiListCountries = url => dispatch => {

    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "05da0dc747msh09150755268e421p148c8djsna768d3fd2802"
        }
    }).then(resp => resp.json())
    .then(data => {
        const tempArr = data.api.countries;
        dispatch(createList(tempArr))
        
    })

    .catch(err => console.log(err));



}
    