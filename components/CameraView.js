import React from "react";
import styled from "styled-components/native";
import { PressableButton } from "./Components";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

const PreviewContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 12px;
  justify-content: flex-end;
`;

const CameraView = ({
  handleFlashMode,
  switchCamera,
  flashMode,
  cameraType,
  takePicture,
}) => (
  <View
    style={{
      flex: 1,
      width: "100%",
      backgroundColor: "transparent",
      flexDirection: "row",
    }}
  >
    <View
      style={{
        position: "absolute",
        left: "5%",
        top: "10%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={handleFlashMode}
        style={{
          backgroundColor: flashMode === "off" ? "#000" : "#fff",
          borderRadius: "50%",
          height: 25,
          width: 25,
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          ⚡️
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={switchCamera}
        style={{
          marginTop: 20,
          borderRadius: "50%",
          height: 25,
          width: 25,
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {cameraType === "front" ? "🤳" : "📷"}
        </Text>
      </TouchableOpacity>
    </View>

    <View
      style={{
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignSelf: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={takePicture}
          style={{
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: "#fff",
          }}
        />
      </View>
    </View>
  </View>
);
export default CameraView;
