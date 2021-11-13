import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.navContainer}>
            <Text size={27} style={styles.navItems}>Cancel</Text>
            <Text size={27} style={styles.navItems}>User</Text>
            <Text size={27} style={styles.navItems} >Save</Text>
        </View>
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 120, height: 120, borderRadius: 400/ 2, alignSelf:"center"}} 
            />
            <View style={styles.details}>
            <Text style={styles.userDetails1}>Name</Text>
            <Text style={styles.userDetails}>Team Esctacy</Text>
            </View>
             <View style={styles.details}>
             <Text style={styles.userDetails1}>UserName</Text>
            <Text style={styles.userDetails}>thecultsocialapp</Text>
            </View>
             <View style={styles.details}>
             <Text style={styles.userDetails1}>Phone</Text>
            <Text style={styles.userDetails}>9870710313</Text>
            </View>
             <View style={styles.details}>
             <Text style={styles.userDetails1}>Bio</Text>
            <Text style={styles.userDetails}></Text>
            </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'black',
        padding: 8,
  },
  
  navContainer: {
        height: 50,
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        
    },
    navItems: {
        color: "white",
        fontSize:18,
    },
    details:{
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    padding:15
    },
    userDetails:{
    color:"white",
    fontSize:16,
    },
    userDetails1:{
    color:"white",
    fontSize:16,
    fontWeight: 'bold',
    }

});
