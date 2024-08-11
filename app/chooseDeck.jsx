import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  CardDeck,
} from "reactstrap";

export default function chooseDeck() {
  const [cardWidth, setCardWidth] = useState(
    Dimensions.get("window").width / 3
  );

  const handleScreenWidthChange = () => {
    const screenWidth = Dimensions.get("window").width;
    setCardWidth(screenWidth / 3);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      handleScreenWidthChange
    );

    handleScreenWidthChange();

    return () => {
      subscription?.remove();
    };
  }, []);

  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "5", title: "Item 5" },
    { id: "6", title: "Item 6" },
    { id: "7", title: "Item 7" },
    { id: "8", title: "Item 8" },
    { id: "9", title: "Item 9" },
    { id: "10", title: "Item 10" },

    // Add more items
  ];
  const renderItem = ({ item }) => (
    <View>
      <Card style={{ width: `${cardWidth}px` }}>
        <CardImg
          top
          style={styles.cardPicture}
          src="https://clipground.com/images/kanji-clipart-15.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle style={styles.title}>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
    />
  );
}
const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  cardPicture: {
    width: "100px",
    height: "100px",
  },
  title: {
    fontSize: "50px",
  },
});
