import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/taskSlice";

export default function TaskItem({ task, onPress }) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.category}>{task.category}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(toggleTask(task.id))}>
        <Ionicons
          name={task.completed ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={task.completed ? "#6C63FF" : "gray"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: "bold" },
  category: { fontSize: 12, color: "gray" },
});
