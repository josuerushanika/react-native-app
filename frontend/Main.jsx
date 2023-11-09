import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View>
      < SafeAreaView style={{ paddingVertical: Platform.OS=== "android"? StatusBar.currentHeight : 0 }}>
         <Text>Main</Text>
      </ SafeAreaView>
    </View>
  )
}

export default Main