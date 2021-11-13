import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import Constants from 'expo-constants';
import FriendReq from '../components/homeFeed/FriendReq';
import colors from "../config/colors";


export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <FriendReq />
            </ScrollView>
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
})