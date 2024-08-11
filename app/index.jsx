import { StyleSheet, Text, View } from "react-native";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { router } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learner</Text>
      <Button style={styles.button}>Click here to start Training</Button>
      <Button style={styles.button} onClick={() => router.push("/vocab")}>
        Hirigana practice
      </Button>
      <Button
        style={styles.button}
        onClick={() =>
          router.push({
            pathname: "/chooseDeck",
            params: { data: cardData },
          })
        }
      >
        Vocabulary practice
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: "70px",
  },
  button: {
    backgroundColor: "black",
    borderRadius: "3px",
    borderColor: "white",
    color: "white",
  },
});
