import React from 'react'
import { View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButtom from '../StyledButton/index';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
          source={require('../../assets/images/ModelS.jpeg')} 
          style={styles.image} 
          />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyledButtom 
            type="primary" 
            content={"Custom Order"}
            onPress={() => {
                console.warn("Custom Order was pressed")
            }}
        />
        <StyledButtom 
            type="secondary" 
            content={"Existing Inventory"}
            onPress={() => {
                console.warn("Existing Inventory was pressed")
            }}
        />
      </View>
    )
}

export default CarItem
