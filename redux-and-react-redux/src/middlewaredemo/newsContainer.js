import { connect } from "react-redux";
import News from "./News";
import { actionCreator } from "./index.js";

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    fetchNews: () => {
      dispatch(actionCreator.fetchNews());
    }
  };
}
export const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
