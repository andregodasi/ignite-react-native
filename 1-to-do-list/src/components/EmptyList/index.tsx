import { Image, Text, View } from "react-native";

import clipboardImg from "../../assets/clipboard.png";
import { styles } from "./styles";

export const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={clipboardImg} style={styles.clipboardImg}/>
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.description}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
};
