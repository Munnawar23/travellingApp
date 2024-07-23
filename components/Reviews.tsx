import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Reviews() {
    const contacts = [
        {
            uid: 1,
            name: 'Alien',
            status: 'its like a journey through a storybook',
            imageUrl: 'https://images.unsplash.com/photo-1610714872434-3efb46a5c258?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 2,
            name: 'Sitara',
            status: 'So many beautiful places,kind people ',
            imageUrl: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 3,
            name: 'Josh',
            status: 'Expensive but good',
            imageUrl: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 4,
            name: 'Frooti',
            status: 'I am in love with New Zeland',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1661759708290-3d1865e7572e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>Reviews by tourists</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name ,status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.UserImage}
                />
                <View>
                    
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView> 
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
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        padding: 8,
        borderRadius: 10,

    },
    UserImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginRight: 14,

    },

    userName: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        
    },

    userStatus: {
        fontSize: 16,
        color: 'black'
    },
})