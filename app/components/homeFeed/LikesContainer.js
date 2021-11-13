import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from "../../config/colors";

import { FontAwesome } from '@expo/vector-icons';

export default function LikesContainer() {
    return (
        <View style={styles.likesContainer}>
            <FontAwesome name="thumbs-up" size={30} color={colors.white} />
            <Text style={styles.likeText}>Share</Text>
            <FontAwesome name="thumbs-down" size={30} color={colors.white} style={{transform: [{rotateY: '180deg'}]}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    likesContainer: {
        backgroundColor: colors.secondary,
        borderRadius: 15,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingVertical: 5
    },
    likeText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})
