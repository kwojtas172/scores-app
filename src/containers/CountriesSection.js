import {fetchApiListCountries} from "../redux/actions";
import {connect} from "react-redux";
import CountriesSection from "../components/CountriesSection";


const mapStateToProps = state => ({
    list: state.reducerList
});

const mapDispatchToProps = dispatch => ({
    fetchApiListCountries: url => dispatch(fetchApiListCountries(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesSection);

