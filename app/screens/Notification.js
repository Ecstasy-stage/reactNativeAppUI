import React from 'react'
import { StyleSheet, Text, View, ScrollView, _ScrollView } from 'react-native'
import Constants from 'expo-constants';
import BottomNavbar from '../components/BottomNavbar';
import colors from "../config/colors";


export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.heading}>Notification</Text>
            <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
            <Text style={styles.NotificationHeading}>Friend Request</Text>
            <Text style={styles.NotificationTime}>a moment ago</Text>
            </View>
            <Text style={styles.NotificationDescription}>You got a new friend request from Manasvi Sharma</Text>
            </View>
            <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
            <Text style={styles.NotificationHeading}>Friend Request</Text>
            <Text style={styles.NotificationTime}>a moment ago</Text>
            </View>
            <Text style={styles.NotificationDescription}>You got a new friend request from bioanalogy</Text>
            </View>
            <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
            <Text style={styles.NotificationHeading}>Friend Request</Text>
            <Text style={styles.NotificationTime}>a moment ago</Text>
            </View>
            <Text style={styles.NotificationDescription}>You got a new friend request from bioanalogy</Text>
            </View>
            <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
            <Text style={styles.NotificationHeading}>Video</Text>
            <Text style={styles.NotificationTime}>a moment ago</Text>
            </View>
            <Text style={styles.NotificationDescription}>Your Video has been approved</Text>
            </View>
            <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
            <Text style={styles.NotificationHeading}>New Friend</Text>
            <Text style={styles.NotificationTime}>a moment ago</Text>
            </View>
            <Text style={styles.NotificationDescription}>Aviral Sharma has accepted your request</Text>
            </View>
            <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
            <Text style={styles.NotificationHeading}>Friend Request</Text>
            <Text style={styles.NotificationTime}>a moment ago</Text>
            </View>
            <Text style={styles.NotificationDescription}>You got a new friend request from Monica Sharma</Text>
            </View>
            <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
            <Text style={styles.NotificationHeading}>Video</Text>
            <Text style={styles.NotificationTime}>a moment ago</Text>
            </View>
            <Text style={styles.NotificationDescription}>Your Video has been approved</Text>
            </View>
            
            </ScrollView>
            <BottomNavbar />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'black',
  },
    navContainer: {
        width: "100%",
        height: 90,
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        position: "absolute",
        backgroundColor: colors.black,
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        fontSize:16,
        fontWeight:'bold',
        color: colors.white,
    },
    flexColumn:{
        height:80,
        borderColor: "#555555",
        borderBottomWidth:1,
        flexDirection: "column",
        alignItems: "baseline",
        justifyContent: "space-around",
        fontSize:16,
        fontWeight:'bold',
        color: colors.white,

    },
    heading:{
        fontSize:16,
        textAlign:"center",
        color: colors.white,
        height: 50,
        borderColor: "#555555",
        borderBottomWidth:1,
    },
    NotificationHeading:{
        color: colors.white,
        fontSize:18,
        alignItems:'baseline',
        height:30,
        width:170,
        paddingLeft:5,
        
    },
    NotificationTime:{
        color: colors.white,
        fontSize:10,
        textAlign:"right",
        height:30,
        width:180,
        

    },
    NotificationDescription:{
        color: colors.white,
        fontSize:14,
        paddingLeft:5

    }


})
