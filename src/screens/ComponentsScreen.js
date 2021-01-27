import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greetings = 'Bye there'
    return (
        <View>
            <Text style={styles.textStyle}>This is the component screen</Text>
            <Text>{greetings}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        paddingTop: 20
    }
})

export default ComponentsScreen
