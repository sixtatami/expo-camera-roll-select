import React from "react";
import styled from "styled-components/native";
import { PressableButton } from "./Components";
import { View } from "react-native";

const HomeScreen = ({ startCamera }) => (
  <View>
    <PressableButton
      onPress={startCamera}
      title="Take picture"
      bgColor="#14274e"
    />
  </View>
);
export default HomeScreen;
