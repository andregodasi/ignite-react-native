import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#333333",
    borderRadius: 6,
    color: "#FFFF",
    borderColor: "#0D0D0D",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonCircle: {
    borderRadius: 50,
    borderColor: "#FFF",
    borderWidth: 2,
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    height: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    position: "absolute",
    bottom: -24,
    zIndex: 5,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 24,
  },
});
