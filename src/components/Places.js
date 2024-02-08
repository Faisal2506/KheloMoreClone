import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { turfImages } from '../constants/turf'

const Places = ({title, picture, sportsAvailable, address}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
        source={picture}/>
      </View>
      <View>
        <Text>
          {sportsAvailable}
        </Text>
      </View>
    </View>
  )
}

export default Places

const styles = StyleSheet.create({})