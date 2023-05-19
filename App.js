import Tasks from './src/pages/Tasks'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateTask from './src/pages/CreateTask';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator  screenOptions={{
          tabBarActiveTintColor: '#50DD99', // Cor ativa do item selecionado
          tabBarInactiveTintColor: 'gray', // Cor dos itens não selecionados
          headerStyle: {
            backgroundColor: '#1B2128', // Cor de fundo do menu de navegação
            borderBottomWidth: 1,
            borderBottomColor: '#50DD99'
          },
          headerTitleStyle: {
            color: '#FFFFFF'
          },
          tabBarStyle: {
            backgroundColor: '#1B2128', // Cor de fundo do menu de navegação
            borderTopColor: '#50DD99'
          },
        }}>
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Adding" component={CreateTask} />
        <Tab.Screen name= "Search" component={CreateTask}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
