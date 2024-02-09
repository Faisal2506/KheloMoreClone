import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Platform } from 'react-native';
import {
  FontAwesome5,
  FontAwesome,
  Octicons,
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
  Feather,
  MaterialIcons
} from '@expo/vector-icons';
import Home from '../Screen/Home';
import Shop from '../Screen/Shop';
import Coaching from '../Screen/Coaching';
import Leaderboard from '../Screen/Leaderboard';
import More from '../Screen/More';

const Tab = createBottomTabNavigator();
const screenOptions =() => {
  return{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      elevation: 0,
      backgroundColor: '#fff',
      height: 60,
      zIndex:2,
    },
    tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    tabBarIconStyle: {
      marginBottom: 5,
    },
    tabBarHideOnKeyboard: true,
  }
}

export const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName='TabHome'
    screenOptions={screenOptions}
    >
    <Tab.Screen 
      name='TabHome'
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.tabBar}>
          <MaterialIcons 
            name='stadium'
            size={24}
            color={focused? '#FC2E20' : '#000'}
          />
          <Text style={{
            fontSize: 12,
            color: focused? '#FC2E20' : '#000'
          }}>
            Play
          </Text>
          </View>
        )
      }}
    />
    <Tab.Screen 
      name='TabShop'
      component={Shop}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.tabBar}>
          <MaterialCommunityIcons
            name='shopping-outline'
            size={24}
            color={focused? '#FC2E20' : '#000'}
          />
          <Text style={{
            fontSize: 12,
            color:focused? '#FC2E20' : '#000'}}>
            Shop
          </Text>
          </View>
        )
      }}
    />
    <Tab.Screen 
      name='TabCoaching'
      component={Coaching}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.tabBar}>
          <MaterialCommunityIcons 
            name='whistle-outline'
            size={24}
            color={focused? '#FC2E20' : '#000'}
          />
          <Text style={{
            fontSize: 12,
            color:focused? '#FC2E20' : '#000'}}>
            Coaching
          </Text>
          </View>
        )
      }}
    />
    <Tab.Screen 
      name='TabLeaderboard'
      component={Leaderboard}
      options={{
        tabBarIcon: ({focused}) =>( 
          <View style={styles.tabBar}>
          <Ionicons 
            name='trophy-outline'
            size={24}
            color={focused? '#FC2E20' : '#000'}
          />
          <Text style={{
            fontSize: 12,
            color:focused? '#FC2E20' : '#000'}}>
            Leaderboard
          </Text>
          </View>
  )
      }}
    />
    <Tab.Screen 
      name='TabMore'
      component={More}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.tabBar}>
          <Feather
            name='compass'
            size={24}
            color={focused? '#FC2E20' : '#000'}
          />
          <Text style={{
            fontSize: 12,
            color:focused? '#FC2E20' : '#000'}}>
           More
          </Text>
          </View>
  )
      }}
    />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    alignItems: 'center'
  }
})