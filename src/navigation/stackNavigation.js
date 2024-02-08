import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../Screen/OnBoarding'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screen/Login';
import Referral from '../Screen/Referral';
import Home from '../Screen/Home';
import Details from '../Screen/Details';
import OTPVerify from '../Screen/OTPVerify'
import { TabNavigation } from './tabNavigation';

const Stack = createStackNavigator();

 const StackNavigation = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='OnBoardingScreen'>
      <Stack.Screen name='OnBoardingScreen' component={OnBoarding}/>
      <Stack.Screen name='LoginScreen' component={Login} />
      <Stack.Screen name='ReferralScreen' component={Referral} />
      <Stack.Screen name='OTPScreen' component={OTPVerify} />
      <Stack.Screen name='DetailsScreen' component={Details} />
      <Stack.Screen name='HomeScreen' component={TabNavigation} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation