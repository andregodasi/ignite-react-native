import { useState } from "react";
import { Alert, FlatList, Image, View, Keyboard } from "react-native";

import { EmptyList } from "../../components/EmptyList";
import { HeaderContent } from "../../components/HeaderContent";
import { TaskCard } from "../../components/TaskCard";

import logoImg from "../../assets/logo.png";

import { styles } from "./styles";
import { FormTask } from "../../components/FormTask";

type Task = {
  id: string;
  description: string;
  isDone: boolean;
};

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState("");

  function handleTaskAdd() {
    const newTask: Task = {
      id: String(new Date().getTime()),
      description: taskDescription,
      isDone: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTaskDescription("");
    Keyboard.dismiss();
  }

  function handleTaksRemove(id: string) {
    Alert.alert("Remover", `Remover a tarefa?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaksToggle(id: string) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      })
    );
  }

  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter((task) => task.isDone).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <FormTask
          value={taskDescription}
          onChangeText={setTaskDescription}
          onAdd={handleTaskAdd}
        />
      </View>
      <View style={styles.content}>
        <HeaderContent
          totalTasks={totalTasks}
          totalCompletedTasks={totalCompletedTasks}
        />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              key={item.id}
              id={item.id}
              description={item.description}
              isDone={item.isDone}
              onTaskDone={() => {
                handleTaksToggle(item.id);
              }}
              onTaskRemove={() => handleTaksRemove(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
};
