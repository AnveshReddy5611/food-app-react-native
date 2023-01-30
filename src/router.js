import React from "react";
import { Button,View, TouchableOpacity, Text, Image,StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";
import CartScreen from "./components/Cart";


const RootStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: {
      title: "Food Shop"
    }
  },
  Dishes: {
    screen: DishesScreen,
    navigationOptions: {
      title: "Dishes"
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      title: "Cart",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
});

export default createAppContainer(RootStack);

// const Stack= createStackNavigator();

// export default function (){
//   return (
//     <View style={styles.flex}>
     
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName='RestaurantsScreen'>
//             <Stack.Screen name='RestaurantsScreen' component={RestaurantsScreen}/>
//             <Stack.Screen name='DishesScreen' component={DishesScreen}/>
//             <Stack.Screen name='CartScreen' component={CartScreen} 
//             options={{title: "Cart",
//                    headerStyle: {
//                      elevation: 0,
//                      shadowOpacity: 0
//                    }}}/>
          

//           </Stack.Navigator>
//         </NavigationContainer>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1
//   }
// });

