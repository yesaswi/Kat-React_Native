import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, TextInput} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text style={{paddingBottom:50}}>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button 
      mode="contained"
      color="blue"
      onPress={() => {
        setIsHungry(false);
      }}
      disabled={!isHungry}
      >
        {isHungry ? "Pour me some milk, please!" : "Thank you!"}
        </Button>
        <Text>

        </Text>
        <Button 
      mode="contained"
      color="blue"
      onPress={() => {
        setIsHungry(true);
      }}
      disabled={isHungry}
      >
        {"I'm Hungry"}
        </Button>
    </View>
  );
}


const App = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={{paddingTop:60, color:'gray'}}>Cat</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>
          
        </Text>
      <TextInput
        placeholder="What would you like to call me?"
        onChangeText={text => setText(text)}
        defaultValue={text}
        // style={{borderColor: 'gray', borderWidth: 0.5}}
      />
      <Text style={{padding: 60, fontSize: 20, color: "gray"}}>
        {"Hello " + text}
      </Text>
      <Cat name={text} />
      </View>
      </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default App;