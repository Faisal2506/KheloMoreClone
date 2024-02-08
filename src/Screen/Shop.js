import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'

const Shop = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false)
  return (
    <SafeAreaView>
      <TopBar />
    </SafeAreaView>
  )
}

export default Shop

const styles = StyleSheet.create({
  
})