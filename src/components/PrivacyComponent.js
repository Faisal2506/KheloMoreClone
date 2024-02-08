import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrivacyComponent = () => {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
    <View style={styles.privacyText}>
      <Text style={styles.text}>
        By proceeding, you agree to the {"\n"}{' '}
        <Text style={styles.hyperlinkStyle} onPress={()=> {
          Linking.openURL('https://google.com')
        }}>
          Terms and conditions
        </Text>
        {' '}and {' '}
        <Text style={styles.hyperlinkStyle} onPress={()=> {
          Linking.openURL('https://google.com')
        }}>
          Privacy Policy
        </Text>
      </Text>
      </View>
      </SafeAreaView>
  )
}

export default PrivacyComponent

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 12
  },
  hyperlinkStyle: {
    color: '#FC2E20'
  },
  privacyText: {
    marginTop: 50,
    width: 250,
    marginBottom: 30
  }
})