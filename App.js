import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import List from "./abcef/List";
import Sua from "./abcef/Sua";
import Them from "./abcef/Them";
import Xoa from "./abcef/Xoa";
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initalRouteName="List">
          <Stack.Screen name="List" options={{title: "Danh Sách Users"}} component={List}/>
          <Stack.Screen name="Sua" options={{title: "Sửa"}} component={Sua}/>
          <Stack.Screen name="Them" options={{title: "Thêm"}} component={Them}/>
          <Stack.Screen name="Xoa" options={{title: "Xóa"}} component={Xoa}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
