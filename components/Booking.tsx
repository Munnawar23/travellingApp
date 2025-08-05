import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import heroImage from '../assets/hero.webp';

export default function Booking() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>For bookings</Text>
      <View style={[styles.card, styles.elevetedCards]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Munnawar Hussain</Text>
        </View>
        <Image source={heroImage} style={styles.cardImage} />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            New Zealand's enchanting landscapes beckon with their pristine
            beauty, inviting adventurers to explore mountains, fjords, and
            ancient forests. Amidst its breathtaking vistas, the spirit of
            adventure intertwines with a sense of tranquility, creating an
            unforgettable journey for those who roam its shores
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://en.wikipedia.org/wiki/New_Zealand')
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.linkedin.com/in/munnawar-hussain-aa544b227/',
              )
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    width: '100%',
    height: 200,
    resizeMode: 'cover', // or 'contain' based on your desired fit
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
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
});
