import React, { useEffect, useState } from "react"
import { Text, View } from "react-native";
import { TextBox } from "../common/TextBox";

const TweetDeckContainer = () => {
  const MAX_LENGTH = 280;
  const [tweet, setTweet] = useState("");
  const [styling, setStyling] = useState({
    textBox: {
      borderColor: "",
      borderRadius: 10,
      height: 120,
      padding: 10,
    },
    labelText: {
      marginVertical: 10,
      textAlign: "center",
      color: "gray"
    }
  });

  const updateStyling = (color: string) => {
    setStyling({
      textBox: {
        ...styling.textBox,
        borderColor: color
      },
      labelText: {
        ...styling.labelText,
        color
      }
    })
  }
  useEffect(() => {
    const tweetLength = tweet.length;
    if (tweetLength > MAX_LENGTH) {
      updateStyling("red");
    } else if (tweetLength <= MAX_LENGTH && tweetLength >= MAX_LENGTH - 10) {
      updateStyling("#a98600");
    } else {
      updateStyling("gray");
    }
  }, [tweet]);

  return (<View style={{
    marginHorizontal: 30
  }}>
    <TextBox tweet={tweet} update={setTweet} styling={styling.textBox} />
    <Text style={styling.labelText}> {MAX_LENGTH - tweet.length} characters remaining </Text>
  </View>)
}

export { TweetDeckContainer }