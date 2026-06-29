import { View, Text } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050816",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: "700",
        }}
      >
        LUXNET OS
      </Text>

      <Text
        style={{
          color: "#5DE2FF",
          marginTop: 12,
          fontSize: 18,
        }}
      >
        The Connected Intelligence
      </Text>
    </View>
  );
}
