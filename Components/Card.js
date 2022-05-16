import { View, Image, Text } from "react-native";

const Card = (props) => {

  const handleDetail = (id) => {
    props.navigation.push('Detail',{
      id
    })
  }

  return (
    <>
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
              height: 320,
              margin: 10,
              padding: 5,
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
                <Text onPress={() => handleDetail(products.id)} style={{ fontWeight: "bold", color: "blue" }}>
                  Lihat detail
                </Text>
            </View>
          </View>
        );
      })}
    </>
  );
};
export default Card;
