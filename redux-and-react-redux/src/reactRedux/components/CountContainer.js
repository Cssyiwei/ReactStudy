import { actions } from "../actions";
import { connect } from "react-redux";
import Count from "./Count";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
function mapDispathToProps(dispatch) {
  return {
    onIncrement: () => dispatch(actions.increase()),
    onDecrement: () => dispatch(actions.decrease())
  };
}
export const Countcontainer = connect(
  mapStateToProps,
  mapDispathToProps
)(Count);
