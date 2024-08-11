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
  const [column, setColumn] = useState(3);

  // Changes based on the screen size
  const handleScreenWidthChange = () => {
    const screenWidth = Dimensions.get("window").width;
    if (screenWidth < 500) {
      setColumn(2);
      setCardWidth(screenWidth / 2);
    } else {
      setColumn(3);
      setCardWidth(screenWidth / 3);
    }
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

  // data format of japnese in general
  const data = [
    {
      id: "1",
      pictureUrl: "https://clipground.com/images/kanji-clipart-15.jpg",
      title: "Family greetings",
      subtitle: "hello",
      content: [
        ["Ohayou", "おはよう", "Good morning", "おはよう", "1"],
        ["Konnichiwa", "こんにちは", "Hello/Good afternoon", "こんにちは", "3"],
        ["Konbanwa", "こんばんは", "Good evening", "こんばんは", "2"],
      ],
    },
    {
      id: "2",
      pictureUrl: "https://clipground.com/images/kanji-clipart-15.jpg",
      title: "Food and Drink",
      subtitle: "delicious",
      content: [
        ["Sushi", "すし", "Sushi", "すし", "1"],
        ["Ramen", "ラーメン", "Ramen", "ラーメン", "2"],
        ["Tempura", "てんぷら", "Tempura", "てんぷら", "3"],
        // Add more examples here
      ],
    },
    {
      id: "3",
      pictureUrl: "https://clipground.com/images/kanji-clipart-15.jpg",
      title: "Objects in a House",
      subtitle: "useful",
      content: [
        ["Table", "テーブル", "Table", "テーブル", "1"],
        ["Chair", "いす", "Chair", "いす", "2"],
        ["Bed", "ベッド", "Bed", "ベッド", "3"],
        // Add more examples here
      ],
    },
    // Add more items
  ];
  const renderItem = ({ item }) => (
    <View>
      <Card style={{ width: `${cardWidth}px` }}>
        <CardImg
          top
          style={styles.cardPicture}
          src={item.pictureUrl}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle style={styles.title}>{item.title}</CardTitle>
          <CardSubtitle style={styles.subtitle}>{item.subtitle}</CardSubtitle>
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
      numColumns={column}
    />
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
  cardPicture: {
    width: "100px",
    height: "100px",
  },
  title: {
    fontSize: "50px",
  },
  subtitle: {
    marginBottom: "20px",
    marginTop: "20px",
  },
});
