import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    paddingBottom: 24,
    borderBottomColor: "#333333",
    borderBottomWidth: 2,
  },
  created: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  createdText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  createdCount: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#333333",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 1000,
  },
  completed: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  completedText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
  completedCount: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#333333",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 1000,
  },
});
