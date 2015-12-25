import { compose } from 'redux'
import { connect } from 'react-redux'
import { keyFilter } from '../actions/action'
import OtherFilter from '../components/OtherFilter'
var xe=false;
export default compose(
  connect(
    state => {
      xe=true;
      return {text: state};
    },
    (dispatch) => ({
      clearFilter: () => {
        dispatch(keyFilter(''));
      }
    }),
    (stateProps, dispatchProps, parentProps) => {
      var ret={
        xe: xe,
        clearFilter: () => {dispatchProps.clearFilter();},
        changeFilter: parentProps.changeFilter,
        text: stateProps.text,
        data: parentProps.data,
      };
      xe=false;
      return ret;
    }
))(OtherFilter);
