import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Trending() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.cards,styles.cardEleveted]}>
      <Image
      source={{
        uri: 'https://istart.com.au/wp-content/uploads/2019/10/Dunedin-City-council.jpg'
      }}
      style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Dunedin</Text>
        <Text style={styles.cardlabel}>South island,New Zeland</Text>
        <Text style={styles.cardDescription}>Dunedin is the second-largest city in the South Island of New Zealand (after Christchurch), and the principal city of the Otago region. Its name comes from Dùn Èideann, the Scottish Gaelic name for Edinburgh, the capital of Scotland]</Text>
        <Text style={styles.cardFooter}>1424km away from aukland</Text>
      </View>
    </View>
      <View style={[styles.cards,styles.cardEleveted]}>
      <Image
      source={{
        uri: 'https://lh3.googleusercontent.com/proxy/LRDF18fSAceZgWZbbKaVkr6IiLApEMsYuTqUMdUL0OhCOKRjHaLQoFgVjxU1L2OYuu0VAERQ2-o2Yc0S8V-9rmCsw1Kl8XEk6FwAwok4FWI_2Hplfk0i1KdrFrrwAJKv'
      }}
      style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Bay of island</Text>
        <Text style={styles.cardlabel}>Bay in New Zeland</Text>
        <Text style={styles.cardDescription}>The Bay of Islands is a subtropical micro-region known for its stunning beauty & history. For those that love beaches and water activities, it's paradise.</Text>
        <Text style={styles.cardFooter}>240km away from aukland</Text>
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
    cards: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardEleveted: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1,
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius:8,
        borderTopRightRadius: 10,
    },
    cardBody: {
        flex: 1,
        flexGrow:1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardlabel: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 6,
    },
    cardDescription: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: '#000000',
    },

})