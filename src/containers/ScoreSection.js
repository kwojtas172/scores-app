import {updateState, fetchApi, createCountries, toggle} from "../redux/actions";
import {connect} from "react-redux";
import ScoreSection from "../components/ScoresSection";


const mapStateToProps = state => ({
    state: state.reducerScores,
    countries: state.reducerCountries,
    // likes: state.reducerLikes
});

const mapDispatchToProps = dispatch => ({
    fetch: url => dispatch(fetchApi(url)),
    update: arr => dispatch(updateState(arr)),
    createCountries: arr => dispatch(createCountries(arr)),
    toggle: (game, isLiked) => dispatch(toggle(game, isLiked))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreSection);

