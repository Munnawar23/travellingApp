import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Front() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>KiwiJourney</Text>
      <Text style={styles.texts}>Book your vacations to NewZeland</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'black',
    },
    texts: {
        fontSize: 18,
        paddingHorizontal: 8,
        color: 'black',
        paddingLeft: 50,
        
    },
    container: {
        width: 350,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})