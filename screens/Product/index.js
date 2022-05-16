import { useEffect } from "react";
import { getDataAction , getDataActionDetail } from "../../redux/actions";
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";
import { View, Text } from "react-native";

const Product = (props) => {
  useEffect(() => {
    props.getDataAction();
  }, [props.getDataAction]);

  return (
    <>
      <Navbar />
      {props.data.loading ? (
        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
          <Text style={{ fontSize: 20 }}>Loading . . </Text>
        </View>
      ) : props.data.error ? (
        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
          <Text style={{ color: "red", fontSize: 30 }}>{props.data.error}</Text>
        </View>
      ) : (
        <Card navigation={props.navigation} detail={props.getDataActionDetail} data={props.data.product} />
      )}
    </>
  );
};

const reduxState = (state) => ({
  data: state.data,
});

const reduxDispatch = () => (dispatch) => {
  return {
    getDataAction: () => dispatch(getDataAction()),
    getDataActionDetail: (id) => dispatch(getDataActionDetail(id))
  };
};
export default connect(reduxState, reduxDispatch)(Product);
