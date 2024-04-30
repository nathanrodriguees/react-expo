import { Text, View, Image } from "react-native";

export default function StyleInline() {
  return (
    <View 
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f00",
      }}>
        <Image source={require ("./assets/favicon.png")}></Image>
      <Text
      style={{
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
      }}>INDMO</Text>

      <Text
      style={{
        paddingTop: 20,
        fontSize: 30,
        color: "#ff0"
      }}>Hello World</Text>

    </View>
  );
}


