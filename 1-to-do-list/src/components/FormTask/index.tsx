import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type FormTaskProps = {
  value: string;
  onChangeText: (text: string) => void;
  onAdd: () => void;
};

export const FormTask: React.FC<FormTaskProps> = ({
  value,
  onChangeText,
  onAdd,
}) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Descrição da tarefa"
        placeholderTextColor="#808080"
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onAdd}
        returnKeyType="done"
      />

      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <View style={styles.buttonCircle}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
