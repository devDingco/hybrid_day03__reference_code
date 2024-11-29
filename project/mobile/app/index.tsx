import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const URI = "172.16.1.22";

export default function 나의시작화면() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent={false} />
      <WebView source={{ uri: `http://${URI}:3000/solplace-logs/` }} />
    </SafeAreaView>
  );
}
