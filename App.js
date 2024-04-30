import { Text, View, Image } from "react-native";
import { style } from "./src/class/StyleExternal";

export default function App() {
  return (
    <View style={style.container}>
      <Image source={require("./assets/favicon.png")}></Image>
      <Text style={style.title}>INDMO</Text>
      <Text style={style.paragraph}>Hello World</Text>
    </View>
  );
}