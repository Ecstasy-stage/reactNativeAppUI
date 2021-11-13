import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar,} from 'react-native';
import colors from "./app/config/colors";

import JoinScreen from './app/screens/JoinScreen';
import AuthScreen from './app/screens/AuthScreen';
import BottomNavbar from './app/components/BottomNavbar';
import HomeScreen from './app/screens/HomeScreen';
import Caption from './app/screens/Caption';
import Profile from './app/screens/Profile';
import Notification from './app/screens/Notification';
import Friends from './app/screens/Friends';
import FriendRequest from './app/screens/FriendRequest';


export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            {/* <AuthScreen /> */}
            {/* <JoinScreen /> */}
            {/* <BottomNavbar /> */}
            {/* <Caption /> */}
            {/* <Profile /> */}
            {/* <Notification /> */}
            {/* <Friends /> */}
            <FriendRequest  />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});
