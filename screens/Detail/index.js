import { useEffect } from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { getDataActionDetail } from "../../redux/actions";

const ProductDetail = (props) => {
  const { id } = props.route.params;

  useEffect(() => {
    props.getDataActionDetail(id);
  }, [id, props.getDataActionDetail]);

  return (
    <>
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
        <View
          // key={i}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            display: "flex",
            width: "95%",
            height: 'auto',
            margin: 10,
            padding: 5,
          }}
        >
          <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri: props.data.productDetail.thumbnail,
            }}
          />

          <View style={{ margin: 3 }}>
            <Text style={{ fontSize: 18 }}>
              {props.data.productDetail.title}{" "}
              {`(${props.data.productDetail.brand})`}
            </Text>
          </View>

          <View>
            <Text>{props.data.productDetail.description}</Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text
              // onPress={() => handleDetail(products.id)}
              style={{ fontWeight: "bold", color: "blue" }}
            >
              Harga : {`${props.data.productDetail.price} $`}
            </Text>
            <Text
              // onPress={() => handleDetail(products.id)}
              style={{ fontWeight: "bold", color: "blue" }}
            >
              Rating Produk : {props.data.productDetail.rating}
            </Text>
            <Text
              // onPress={() => handleDetail(products.id)}
              style={{ fontWeight: "bold", color: "blue" }}
            >
              Stock Produk : {props.data.productDetail.stock}
            </Text>
            <Text
              // onPress={() => handleDetail(products.id)}
              style={{ fontWeight: "bold", color: "blue" }}
            >
              Kategori Produk : {props.data.productDetail.category}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};
const reduxState = (state) => ({
  data: state.dataDetail,
});

const reduxDispatch = () => (dispatch) => {
  return {
    getDataActionDetail: (id) => dispatch(getDataActionDetail(id)),
  };
};
export default connect(reduxState, reduxDispatch)(ProductDetail);
