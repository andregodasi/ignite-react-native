import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import checkImg from "../../assets/check.png";
import trashImg from "../../assets/trash.png";

type TaskCardProps = {
  id: string;
  isDone: boolean;
  description: string;
  onTaskDone: (id: string) => void;
  onTaskRemove: (id: string) => void;
};

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  isDone,
  description,
  onTaskDone,
  onTaskRemove,
}) => {
  const handleTaskDone = () => {
    onTaskDone(id);
  };

  const handleTaskRemove = () => {
    onTaskRemove(id);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={isDone ? styles.taskDone : styles.taskDoing}
        onPress={handleTaskDone}
      >
        {isDone && <Image source={checkImg} style={styles.imgDone} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.taskDescription}
        onPress={handleTaskDone}
      >
        <Text style={isDone ? styles.textDone : styles.textDoing}>
          {description}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.removebutton} onPress={handleTaskRemove}>
        <Image style={styles.removeImage} source={trashImg} />
      </TouchableOpacity>
    </View>
  );
};
