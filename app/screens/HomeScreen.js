import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import BottomNavbar from '../components/BottomNavbar';
import HomeFeed from '../components/homeFeed/HomeFeed';

import colors from "../config/colors";

export default function HomeScreen() {
    return (
        <View style={styles.homeContainer}>
            <HomeFeed />
            <BottomNavbar />
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: colors.black,
        width: "100%"
    }
})
