import { connect } from 'react-redux';
import { displayAside } from '../actions';
import Header from '../components/Header';

function mapStateToProps(state){
	return{
		asideVisibility: state.aside
	};
}

function mapActionsToProps(dispatch){
	return{
		onDisplayAside: aside => dispatch(displayAside(aside))
	};
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Header);