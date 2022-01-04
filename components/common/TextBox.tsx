import React from "react";
import { TextInput, View } from "react-native";

const TextBox: React.FC<{ tweet: string; update: Function, styling: Object }> = ({ tweet, update, styling }) => {
  return (
    <View style={{ width: '100%', borderWidth: 1, ...styling }}>
      <TextInput
        value={tweet}
        numberOfLines={3}
        multiline={true}
        onChangeText={e => update(e)} />
    </View>
  )
}

export { TextBox }