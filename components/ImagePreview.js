import React from "react";
import styled from "styled-components/native";
import { PressableButton } from "./Components";
import { Text, View, ImageBackground, Image } from "react-native";

const PreviewContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 12px;
  justify-content: flex-end;
`;

const ImagePreview = ({ photo, retakePicture, savePhoto }) => (
  <ImageBackground
    source={{ uri: photo && photo.uri }}
    style={{
      flex: 1,
    }}
  >
    <PreviewContainer>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <PressableButton
          onPress={retakePicture}
          title="Re-take"
          bgColor="#14274e"
        />
        <PressableButton
          onPress={savePhoto}
          title="save photo"
          bgColor="#14274e"
        />
      </View>
    </PreviewContainer>
  </ImageBackground>
);
export default ImagePreview;
