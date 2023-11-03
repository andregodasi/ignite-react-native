import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingEnd: 8,
    paddingStart: 12,
    paddingVertical: 12,
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#333333",
    marginBottom: 8,
    marginTop: 8,
  },
  taskDone: {
    height: 18,
    width: 18,
    borderRadius: 1000,
    backgroundColor: "#5E60CE",
    borderWidth: 2,
    borderColor: "#5E60CE",
    justifyContent: "center",
    alignItems: "center",
  },
  taskDoing: {
    height: 18,
    width: 18,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: "#4EA8DE",
  },
  taskDescription: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  textDone: {
    color: "#808080",
    fontSize: 14,
    flex: 1,
    textDecorationLine: "line-through",
  },
  textDoing: {
    color: "#F2F2F2",
    fontSize: 14,
    flex: 1,
  },
  imgDone: {
    width: 8,
    height: 6,
  },
  removebutton: {},
  removeImage: {
    height: 36,
    width: 36,
  },
});
