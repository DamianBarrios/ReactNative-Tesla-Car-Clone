import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style';

const StyledButton = ({type, content, onPress}) => {

    const backgroundColor = type === 'primary' ? '#5e5e5e' : '#ededed';
    const textColor = type === 'primary' ? '#ededed' : '#5e5e5e';


    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={onPress}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton;
