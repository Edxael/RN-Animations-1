import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeComp from "./01-Home"
import Example1 from "./02-Example"

const Drawer = createDrawerNavigator();

const NavComp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeComp} />
        <Drawer.Screen name="Example1" component={Example1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NavComp;