import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Linking, Image} from 'react-native';
import Constants from 'expo-constants';
import ToggleSwitch from 'toggle-switch-react-native'

export default function App() {
  return (
        <View style={styles.Container}>
        <View style={styles.FriendList}> 
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 25, height: 25, borderRadius: 400/ 2}} 
            />
            <Text style={styles.FriendName}>Marco Pilloni</Text>
           <ToggleSwitch
            isOn={false}
            onColor="skyblue"
            offColor="gray"
            size='medium'
            onToggle={isOn => console.log("changed to : ", isOn)}
            />
        </View>
        <View style={styles.FriendList}> 
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 25, height: 25, borderRadius: 400/ 2}} 
            />
            <Text style={styles.FriendName}>Manasvi sharma</Text>
           <ToggleSwitch
            isOn={false}
            onColor="skyblue"
            offColor="gray"
            size='medium'
            onToggle={isOn => console.log("changed to : ", isOn)}
            />
        </View>
		<View style={styles.FriendList}> 
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 25, height: 25, borderRadius: 400/ 2}} 
            />
            <Text style={styles.FriendName}>Nishant Bhatt</Text>
           <ToggleSwitch
            isOn={false}
            onColor="skyblue"
            offColor="gray"
            size='medium'
            onToggle={isOn => console.log("changed to : ", isOn)}
            />
        </View>
		<View style={styles.FriendList}> 
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 25, height: 25, borderRadius: 400/ 2}} 
            />
            <Text style={styles.FriendName}>Divya Agrawal</Text>
           <ToggleSwitch
            isOn={false}
            onColor="skyblue"
            offColor="gray"
            size='medium'
            onToggle={isOn => console.log("changed to : ", isOn)}
            />
        </View>
		<View style={styles.FriendList}> 
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 25, height: 25, borderRadius: 400/ 2}} 
            />
            <Text style={styles.FriendName}>Dipali Singh</Text>
           <ToggleSwitch
            isOn={false}
            onColor="skyblue"
            offColor="gray"
            size='medium'
            onToggle={isOn => console.log("changed to : ", isOn)}
            />
        </View>
		<View style={styles.FriendList}> 
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 25, height: 25, borderRadius: 400/ 2}} 
            />
            <Text style={styles.FriendName}>Richa Paliwal</Text>
           <ToggleSwitch
            isOn={false}
            onColor="skyblue"
            offColor="gray"
            size='medium'
            onToggle={isOn => console.log("changed to : ", isOn)}
            />
        </View>
		<View style={styles.FriendList}> 
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 25, height: 25, borderRadius: 400/ 2}} 
            />
            <Text style={styles.FriendName}>Shilpi garg</Text>
           <ToggleSwitch
            isOn={false}
            onColor="skyblue"
            offColor="gray"
            size='medium'
            onToggle={isOn => console.log("changed to : ", isOn)}
            />
        </View>
        </View>
        
  );
}


const styles = StyleSheet.create({
Container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
},
FriendList: {
    height: 50,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent:'space-between',
    backgroundColor: "black",
},
FriendName:{
    color:'white',
    fontSize:16,
    width:"70%"
},
})