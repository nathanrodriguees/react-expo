import { Text, View, StyleSheet, Image } from "react-native";

export default function StyleInternal() {
  return (
    <View style={teste.container}>
      <Image source={require("./assets/favicon.png")}></Image>
      <Text style={teste.title}>INDMO</Text>
      <Text style={teste.paragraph}>Hello World</Text>
    </View>
  );
}

const teste = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00f",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
  },
  paragraph: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff0",
  }
});
