import { createDrawerNavigator } from '@react-navigation/drawer';
import GoalItem from './GoalItem';
export default function DrawerComponent() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={GoalItem} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}
