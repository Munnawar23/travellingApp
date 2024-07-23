import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ElevetedCards from './Mountains'

export default function Booking() {
    function openWebsite (websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>For bookings</Text>
      <View style={[styles.card,styles.elevetedCards]}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            Ruby Vittory
        </Text>
      </View>
      <Image 
      source={{
        uri: 'https://plus.unsplash.com/premium_photo-1683147627621-190cc667fd92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={styles.cardImage}
      />
      <View style={styles.bodyContainer}>
        <Text numberOfLines={2}>
        New Zealand's enchanting landscapes beckon with their pristine beauty, inviting adventurers to explore mountains, fjords, and ancient forests. Amidst its breathtaking vistas, the spirit of adventure intertwines with a sense of tranquility, creating an unforgettable journey for those who roam its shores
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity 
        onPress={() => openWebsite('https://en.wikipedia.org/wiki/New_Zealand')}>
            <Text style={styles.socialLinks}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => openWebsite('https://www.linkedin.com/in/munnawar-hussain-aa544b227/')}>
            <Text style={styles.socialLinks}>Follow me</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      color: 'black',
    },

    card: {
      width: 350,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16,
    },

    elevetedCards: {
      backgroundColor: '#FAF3E6',
      elevation: 3,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.3,
    },

    headingContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    headerText: {
      color: '#000',
      fontSize: 16,
      fontWeight: '600',
      
    }, 

    cardImage: {
        height: 200,
    },

    bodyContainer: {
      padding: 10,
    },

    footerContainer: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',

    },

    socialLinks: {
      fontSize: 16,
      color: '#000000',
      backgroundColor: '#FFF',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 6,
    },
})