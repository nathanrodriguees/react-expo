import teste from "./StyleExternal";

export default function StyleInternal() {
  return (
    <View style={teste.container}>
      <Image source={require("./assets/favicon.png")}></Image>
      <Text style={teste.title}>INDMO</Text>
      <Text style={teste.paragraph}>Hello World</Text>
    </View>
  );
}
