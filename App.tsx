import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Lakes from './components/Lakes'
import Mountains from './components/Mountains'
import Trending from './components/Trending'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import Front from './components/Front'

const App = () => {
  return (

    <SafeAreaView>
    <ScrollView>
      <Front></Front>
     <Lakes></Lakes>
     <Mountains></Mountains>
     <Trending></Trending>
     <Reviews></Reviews>
     <Booking></Booking>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App