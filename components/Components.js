import React from "react";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;
const ButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  text-align: center;
`;

export const PressableButton = ({ onPress, bgColor, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: papayawhip;
`;
