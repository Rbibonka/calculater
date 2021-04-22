import React, { Component, useState } from "react";
import { Text, View, StyleSheet, TextInput } from 'react-native';
import {Input, Button} from 'react-native-elements';
import Constants from 'expo-constants';

import {Calculater} from './Calculater';

const MainPanel = () => {
  
  const [num, setNum] = useState(0);
  const [panel, setPanel] = useState("");
  const [count, setCount] = useState(0);

  function changePanel(x){
    setPanel(panel + x);
  }

  function Calculate() {
    let a = Calculater(panel);
    setPanel(a);
  }

  return (
  <View>
    <View style={styles.container}>
      <TextInput style={styles.input} 
      editable={false} 
      selectTextOnFocus={false}
      value={panel}/>
    </View>
    <View style={styles.container}>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} title="1" 
      onPress={() => changePanel(1)} 
      />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(2)} 
      title="2" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(3)} 
      title="3" />
    </View>

    <View style={styles.container}>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(4)} 
      title="4" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(5)} 
      title="5" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(6)} 
      title="6" />
    </View>

    <View style={styles.container}>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(7)} 
      title="7" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(8)} 
      title="8" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(9)} 
      title="9" />
    </View>
      <View style={styles.container}>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel("-")} 
      title="-" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel(0)} 
      title="0" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }}
      onPress={() => changePanel("+")} 
      title="+" />
    </View>
    <View style={styles.container}>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel("/")} 
      title="/" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={() => changePanel("*")} 
      title="*" />
      <Text>{'\t'}</Text>
      <Text>{'\t'}</Text>
      <Button titleStyle={{
        color: "black",       
        fontSize: 50,
        width: 80,
        height: 80,
      }} 
      onPress={Calculate} 
      title="=" />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "99%",
    fontSize: 32,
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    color: "green",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
  },
  row: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
  }
});
export default MainPanel;