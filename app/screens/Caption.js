import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Linking, Image} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.navContainer}>
            <Text size={27} style={{color:'skyblue',fontSize:14}}
            onPress={()=> Linking.openURL('') }
            >Cancel</Text>
            <Text size={27} style={styles.navItems}>Caption</Text>
            <Text size={27} style={{color:'skyblue',fontSize:14}}
            onPress={()=> Linking.openURL('')}>Share</Text>
        </View>
        <View style={styles.navContainer1}> 
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 40, height: 40, borderRadius: 400/ 2}} 
            />
            <TextInput style={styles.txtinpt}
            placeholder = "Write a 140 character caption" 
            placeholderTextColor="#555555"
            />
        </View>


      <Text style={styles.paragraph}
      numberOfLines={1}
      ellipsizeMode="clip">
        All your friends will receive this video with your caption in their feed.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
    width:"100%",
  },
  
  paragraph: {
    marginTop: 30,
    fontSize: 11,
    color:'white',
    textAlign: 'left',
    padding:8,
  },
   txtinpt: {
    fontSize: 16,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'left',
    height:50,
    width:"80%",
    padding:10,

  },
  navContainer: {
        height: 50,
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "black",
    },
    navItems: {
        color: "white",
        fontSize:14,
    },
     navContainer1: {
        height: 50,
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "black",
    }

});
