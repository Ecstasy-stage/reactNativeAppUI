import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from "../config/colors";

import { FontAwesome, FontAwesome5, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function BottomNavbar() {
    return (
        <View style={styles.navContainer}>
            <Ionicons name="md-tv-outline" size={27} style={styles.navItems} />
            <Feather name="search" size={24} style={styles.navItems} />
            <Ionicons name="person-add-outline" size={22} style={styles.navItems} />
            <FontAwesome5 name="bell" size={24} style={styles.navItems} />
            <FontAwesome name="user-circle" size={24} style={styles.navItems} />
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 5,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: colors.black
    },
    navItems: {
        color: colors.white
    }
})
