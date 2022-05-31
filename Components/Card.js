import { View, Image, Text, TouchableOpacity, StyleSheet,ScrollView } from "react-native";

const Card = (props) => {
  const handleDetail = (id) => {
    props.navigation.push("Detail", {
      id,
    });
  };

  return (
    <>
    <ScrollView>
      {props.data.products.map((products, i) => {
        return (
          <View
            key={i}
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
              paddingBottom:10
            }}
          >
            <Image
              style={{ width: "100%", height: 200 }}
              source={{
                uri: products.thumbnail,
              }}
            />

            <View style={{ margin: 3 }}>
              <Text style={{ fontSize: 18 }}>
                {products.title} {`(${products.brand})`}
              </Text>
            </View>

            <View>
              <Text>{products.description}</Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text
                onPress={() => handleDetail(products.id)}
                style={{ fontWeight: "bold", color: "blue" }}
              >
                Lihat detail
              </Text>
            </View>
          </View>
        );
      })}
      </ScrollView>

      <View style={styles.headerStyle}>
        {/* <View></View> */}
        <TouchableOpacity
          style={{ marginRight: 4 }}
          onPress={() => props.handlePreviousPage()}
        >
          <Text style={{fontSize: 15, fontWeight:'bold'}}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 4 }}
          onPress={() => props.handleNextPage()}
        >
          <Text style={{fontSize: 15, fontWeight:'bold'}}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center', alignItems: "center", marginBottom: 20,}}>
        <Text style={{}}>
          {props.pageCurrent} of {props.total}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
export default Card;
