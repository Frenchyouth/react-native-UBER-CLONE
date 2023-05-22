import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import NavigateCard from './components/NavigateCard';
import RideOptionsCard from './components/RideOptionsCard';
import NavOptions from './components/NavOptions';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              {/* <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}



export const MapStack = () =>
{
    return(
        <Stack.Navigator initialRouteName="NavOptions"  >
         <Stack.Screen name="NavOptions"  component={NavOptions} />
        <Stack.Screen name="MapScreen" component={MapScreen} options={{headerTitle: "My Routines"}}/>
        <Stack.Screen name="NavigateCard"  component={NavigateCard} />
        <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
    </Stack.Navigator>
    );
}