import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Alert, Button } from 'react-native';

//View mapped to platform dependant view
export default function App() {
  const handlePress = () => console.log('text pressed')
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress = {handlePress}>Hello World</Text>
      <TouchableWithoutFeedback onPress={()=>console.log('image tapped')}>
        <Image 
        blurRadius={2}
        source={{
          width:200,
          height: 300,
          uri: 'https://picsum.photos/199/300',
        }}>
        </Image>
      </TouchableWithoutFeedback>
      <Button colour= 'orange' title='Click Me' onPress={()=> Alert.alert('My title', 'button tapped', [
        {text:'yes', onPress: ()=>console.log('yes')},
        {text:'no', onPress: () =>console.log('no')}
      ])}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
