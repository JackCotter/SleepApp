import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Alert, Button, Platform } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
//View mapped to platform dependant view
export default function App() {
  const {landscape, portait} = useDeviceOrientation()
  const handlePress = () => console.log('text pressed')
  let x = 1;
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? '100%' : '30%',
      }}>

      </View>
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
      <Button colour= 'orange' title='Click Me' onPress={()=> Alert.prompt('title','message', text => console.log(text))}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: 'orange'};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    paddingTop: Platform.OS === "android" ? StatusBar.height : 0
  },
});
