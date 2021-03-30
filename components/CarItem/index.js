import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButtom from "../StyledButton/index";

const CarItem = ({name, tagline, taglineCTA, image}) => {

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>
            {name}
        </Text>
        <Text style={styles.subtitle}>
            {tagline}
            {' '}
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButtom
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />
        <StyledButtom
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
