import { Image,ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Mountains() {
  return (
    <View>
      <Text style={styles.headingText}>Mountains</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.cards, styles.cardEleveted]}>
        <Image
            source={{ uri: 'https://www.backpackingmatt.com/wp-content/uploads/2012/03/415054_10100630816844929_14801685_54271217_1966282812_o-1.jpg' }} 
            style={styles.image}
          />
          <Text style={styles.cardText}>Mitre Peak</Text>
        </View>
        <View style={[styles.cards, styles.cardEleveted]}>
            <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Aoraki_Mount_Cook.JPG' }} 
            style={styles.image}
          />
          <Text style={styles.cardText}>Mount cook</Text>
        </View>
        <View style={[styles.cards, styles.cardEleveted]}>
        <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWf0odl5FRO6kdxpfA9f0A1vRx6yQrgu_YERZykPLZw&s' }} 
            style={styles.image}
          />
          <Text style={styles.cardText}>Tongariro</Text>
        </View>
        <View style={[styles.cards, styles.cardEleveted]}>
        <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfbwhQ-S175vVI0f5AzET08PZP7ELAt5befjYWh5ADw&s' }} 
            style={styles.image}
          />
          <Text style={styles.cardText}>Dampier</Text>
        </View>
        <View style={[styles.cards, styles.cardEleveted]}>
        <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQiv2il0DMFWcdNUbUsEbP6F8kAY7kmgbIJVfMymduA&s' }} 
            style={styles.image}
          />
          <Text style={styles.cardText}>La Perouse</Text>
        </View>
      </ScrollView>
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
        padding: 8,
    },
    cards: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 8,
        margin: 8,

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        borderRadius: 4,
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
      },
    cardEleveted: {
        backgroundColor:'#EF5354',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#EF5354',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
})