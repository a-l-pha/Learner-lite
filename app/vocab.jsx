import { StyleSheet, Text, View } from "react-native";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { router } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Form>
        <FormGroup style={styles.form}>
          <Label>ka</Label>
          <Input
            type="text"
            name="text"
            id="vocab box 1"
            placeholder="Enter some hiragana (か)"
          />
        </FormGroup>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  title: {
    fontSize: "70px",
  },
});
