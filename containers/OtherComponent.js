import { compose } from 'redux'
import { connect } from 'react-redux'
import { keyFilter } from '../actions/action'
import OtherComponent from '../components/OtherComponent'

export default compose(
  connect(
    state => ({text: state}),
    (dispatch) => ({
      filterByKey: (key) => {
        dispatch(keyFilter(key));
      }
    }),
    (stateProps, dispatchProps, parentProps) => {
      return {
        data: parentProps.data,
        onFilterName: () => {dispatchProps.filterByKey(parentProps.data.name);},
        onFilterCompany: () => {dispatchProps.filterByKey(parentProps.data.company);},
        onFilterCountry: () => {dispatchProps.filterByKey(parentProps.data.country);},
        onFilterCity: () => {dispatchProps.filterByKey(parentProps.data.city);},
        onFilterState: () => {dispatchProps.filterByKey(parentProps.data.state);}
      };
    }
))(OtherComponent);
