import React from "react";
import { View, Text } from "@react-pdf/renderer";

function AutoWrapLine(props) {
  const textStyle = props.textStyle ? props.textStyle : {};
  const viewStyle = props.viewStyle ? props.textStyle : {};
  return (
    <View style={[{ viewStyle, flexDirection: "row", flexWrap: "wrap" }]}>
      {Array.from(props.text).map((char, index) => {
        if (char === " ") {
          return <Text key={index}>{char}</Text>;
        } else {
          return (
            <Text key={index} style={[textStyle]}>
              {char}
            </Text>
          );
        }
      })}
    </View>
  );
}

export default AutoWrapLine;
