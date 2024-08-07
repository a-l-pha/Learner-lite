import { StyleSheet, Text, View } from "react-native";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Input, Label, Progress } from "reactstrap";
import { router } from "expo-router";
import { useState } from "react";
import { tokenToString } from "typescript";

// start of with direct learning direc and then move to words
// if the user gets it wrong phonetic spellings are given as answers
// Then just a goood memory game where answer is given as voice only
const hirigana = [
  ["a", "あ"],
  ["i", "い"],
  ["u", "う"],
  ["e", "え"],
  ["o", "お"],
  ["ka", "か"],
  ["ki", "き"],
  ["ku", "く"],
  ["ke", "け"],
  ["ko", "こ"],
  ["sa", "さ"],
  ["shi", "し"],
  ["su", "す"],
  ["se", "せ"],
  ["so", "そ"],
  ["ta", "た"],
  ["chi", "ち"],
  ["tsu", "つ"],
  ["te", "て"],
  ["to", "と"],
  ["na", "な"],
  ["ni", "に"],
  ["nu", "ぬ"],
  ["ne", "ね"],
  ["no", "の"],
  ["ha", "は"],
  ["hi", "ひ"],
  ["fu", "ふ"],
  ["he", "へ"],
  ["ho", "ほ"],
  ["ma", "ま"],
  ["mi", "み"],
  ["mu", "む"],
  ["me", "め"],
  ["mo", "も"],
  ["ya", "や"],
  ["yu", "ゆ"],
  ["yo", "よ"],
  ["ra", "ら"],
  ["ri", "り"],
  ["ru", "る"],
  ["re", "れ"],
  ["ro", "ろ"],
  ["wa", "わ"],
  ["wo", "を"],
  ["n", "ん"],
];

// In this tgw words are sounded out (this will help more)
const top100JapaneseWords = [
  ["watashi", "わたし"],
  ["anata", "あなた"],
  ["kare", "かれ"],
  ["kanojo", "かのじょ"],
  ["sore", "それ"],
  ["kore", "これ"],
  ["are", "あれ"],
  ["dore", "どれ"],
  ["koko", "ここ"],
  ["soko", "そこ"],
  ["doko", "どこ"],
  ["dare", "だれ"],
  ["nani", "なに"],
  ["itsu", "いつ"],
  ["dōshite", "どうして"],
  ["ikura", "いくら"],
  ["takai", "たかい"],
  ["yasui", "やすい"],
  ["ookii", "おおきい"],
  ["chiisai", "ちいさい"],
  ["atarashii", "あたらしい"],
  ["furui", "ふるい"],
  ["ii", "いい"],
  ["warui", "わるい"],
  ["akarui", "あかるい"],
  ["kurai", "くらい"],
  ["muzukashii", "むずかしい"],
  ["yasashii", "やさしい"],
  ["hayai", "はやい"],
  ["osoi", "おそい"],
  ["oishii", "おいしい"],
  ["mazui", "まずい"],
  ["tanoshii", "たのしい"],
  ["tsumaranai", "つまらない"],
  ["kirei", "きれい"],
  ["kitanai", "きたない"],
  ["samui", "さむい"],
  ["atsui", "あつい"],
  ["tsumetai", "つめたい"],
  ["atarashii", "あたらしい"],
  ["furui", "ふるい"],
  ["shiroi", "しろい"],
  ["kuroi", "くろい"],
  ["akai", "あかい"],
  ["aoi", "あおい"],
  ["midori", "みどり"],
  ["kiiro", "きいろ"],
  ["chairo", "ちゃいろ"],
  ["murazaki", "むらさき"],
  ["pink", "ピンク"],
];

const top50Kanjii = [
  ["人", "hito"],
  ["日", "hi"],
  ["月", "tsuki"],
  ["火", "hi"],
  ["水", "mizu"],
  ["木", "ki"],
  ["金", "kin"],
  ["土", "tsuchi"],
  ["本", "hon"],
  ["山", "yama"],
  ["川", "kawa"],
  ["田", "ta"],
  ["上", "ue"],
  ["下", "shita"],
  ["中", "naka"],
  ["大", "dai"],
  ["小", "shou"],
  ["出", "deru"],
  ["入", "iru"],
  ["見", "miru"],
  ["行", "iku"],
  ["来", "kuru"],
  ["食", "taberu"],
  ["飲", "nomu"],
  ["言", "iu"],
  ["話", "hanasu"],
  ["買", "kau"],
  ["売", "uru"],
  ["立", "tatsu"],
  ["書", "kaku"],
  ["聞", "kiku"],
  ["読", "yomu"],
  ["見", "miru"],
  ["歩", "aruku"],
  ["走", "hashiru"],
  ["車", "kuruma"],
  ["電", "den"],
  ["気", "ki"],
  ["雨", "ame"],
  ["雪", "yuki"],
  ["空", "sora"],
  ["海", "umi"],
  ["川", "kawa"],
  ["町", "machi"],
  ["村", "mura"],
  ["前", "mae"],
  ["後", "ato"],
  ["左", "hidari"],
  ["右", "migi"],
  ["名", "na"],
];

const top50Katakana = [
  ["テレビ", "terebi"],
  ["コンピュータ", "konpyuta"],
  ["バス", "basu"],
  ["タクシー", "takushii"],
  ["レストラン", "resutoran"],
  ["ホテル", "hoteru"],
  ["メール", "meeru"],
  ["ゲーム", "geemu"],
  ["インターネット", "intanetto"],
  ["カメラ", "kamera"],
  ["ジュース", "juusu"],
  ["コーヒー", "koohii"],
  ["パン", "pan"],
  ["チョコレート", "chokoreeto"],
  ["アイスクリーム", "aisukuriimu"],
  ["ビール", "biiru"],
  ["ワイン", "wain"],
  ["ピザ", "piza"],
  ["サンドイッチ", "sandoicchi"],
  ["ハンバーガー", "hambaagaa"],
  ["スープ", "suupu"],
  ["サラダ", "sarada"],
  ["ステーキ", "suteeki"],
  ["ポテト", "poteto"],
  ["スパゲッティ", "supagetti"],
  ["タブレット", "taburetto"],
  ["スマートフォン", "sumaato fon"],
  ["ノートパソコン", "nooto pasokon"],
  ["バイク", "baiku"],
  ["バナナ", "banana"],
  ["オレンジ", "orenji"],
  ["アップル", "appuru"],
  ["パイナップル", "painappuru"],
  ["キウイ", "kiui"],
  ["マンゴー", "mangoo"],
  ["メロン", "meron"],
  ["レモン", "remon"],
  ["グレープ", "gureepu"],
  ["ストロベリー", "sutoroberii"],
  ["ブルーベリー", "buruuberii"],
  ["チェリー", "cherii"],
  ["ピーチ", "piichi"],
  ["スイカ", "suika"],
  ["キャベツ", "kyabetsu"],
  ["レタス", "retasu"],
  ["トマト", "tomato"],
  ["キュウリ", "kyuuri"],
  ["ニンジン", "ninjin"],
  ["ポケット", "poketto"],
];

let learningWordBatches = [];
for (let i = 0; i < hirigana.length; i += 10) {
  const batch = hirigana.slice(i, i + 10);
  learningWordBatches.push(batch);
}
currentList = learningWordBatches[0];

export default function App() {
  const [text, setText] = useState("");
  const [batch, setBatch] = useState(0);
  const [learningList, setLearningList] = useState(learningWordBatches[batch]);
  function handleChange(input) {
    setText(input.target.value);
  }
  function handleKey(event) {
    if (event.key === "Enter") {
      answerChecker();
    }
  }

  function answerChecker() {
    let answer = text;
    if (text === "") {
      return;
    }
    let tempList = learningList;
    let wordPair = tempList.shift();

    if (answer === wordPair[1]) {
      setLearningList(tempList);
    } else if (learningList.filter((item) => item === wordPair).length < 3) {
      tempList.push(wordPair);
      tempList.push(wordPair);
      setLearningList(tempList);
    }
    setText("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bigHeading}>{learningList[0][0]}</Text>

      <Input
        type="text"
        value={text}
        name="text"
        style={styles.inputBox}
        placeholder="Enter some hiragana "
        onChange={handleChange}
        onKeyDownCapture={handleKey}
      />

      <Text style={styles.smallHeading}>{learningList[0][1]}</Text>
      <Text style={styles.smallHeading}>{learningList.length} words left</Text>
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
  inputBox: {
    width: "50%",
  },
  bigHeading: {
    fontSize: "50px",
    color: "white",
    marginBottom: "10px",
    marginTop: "10px",
  },
  smallHeading: {
    fontSize: "25px",
    color: "white",
    marginBottom: "10px",
    marginTop: "10px",
  },
});
