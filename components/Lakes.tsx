import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Lakes() {
  return (
    <View>
      <Text style={styles.headingText}>Lakes</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardOne]}>
        <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oQewCfxfmV-U-T8EXzZBeWq_bJeE5IAZRyyHxFkjJg&s' }} 
            style={styles.image}
          />
          <Text style={styles.cardText}>Ohau</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
        <Image
            source={{ uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/15/ef.jpg' }} 
            style={styles.image}
          />
          <Text style={styles.cardText}>Pukaki</Text>
        </View>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'black',
    },
    container: {
      flex: 1,
      flexDirection:'row',
      padding: 8,
    },
    cards: {
        width: 150,
        height: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        margin: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute', 
      borderRadius: 4,
  },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },
    cardText: {
      position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better readability
    padding: 4,
    borderRadius: 4,
    }
})