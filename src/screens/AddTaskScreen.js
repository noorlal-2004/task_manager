import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export default function AddTaskScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const dispatch = useDispatch();

  const handleSave = () => {
    if (title.trim()) {
      dispatch(addTask({ title}));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />

      {/* <TextInput
        style={styles.input}
        placeholder="Category (Work, Personal, Study)"
        value={category}
        onChangeText={setCategory}
      /> */}

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  saveBtn: {
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveText: { color: "white", fontWeight: "bold" },
});
