import { Text, View } from "react-native";

import { styles } from "./styles";

type HeaderContentProps = {
  totalTasks: number;
  totalCompletedTasks: number;
};

export const HeaderContent: React.FC<HeaderContentProps> = ({
  totalTasks,
  totalCompletedTasks,
}) => {
  return (
    <View style={styles.contentHeader}>
      <View style={styles.created}>
        <Text style={styles.createdText}>Criadas</Text>
        <Text style={styles.createdCount}>{totalTasks}</Text>
      </View>
      <View style={styles.completed}>
        <Text style={styles.completedText}>Concluídas</Text>
        <Text style={styles.completedCount}>{totalCompletedTasks}</Text>
      </View>
    </View>
  );
};
