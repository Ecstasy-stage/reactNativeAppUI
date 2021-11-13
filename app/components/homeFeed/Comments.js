import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import colors from "../../config/colors";

import { FontAwesome } from '@expo/vector-icons';

export default function Comments() {
    return (
        <View style={styles.commentContainer}>
            <View style={styles.authorContainer}>
                <View style={styles.img}></View>
                <Text style={styles.userName}>User name</Text>
            </View>
            <View style={styles.commentSection}>
                <Text style={styles.caption}>Hello bro, this video is awesome. I think you should upload more this type of videos.</Text>
            </View>
            <View style={styles.likeSection}>
            <FontAwesome name="thumbs-up" size={15} color={colors.white} />
            <Text style={styles.likeText}>Reply</Text>
            <FontAwesome name="thumbs-down" size={15} color={colors.white} style={{transform: [{rotateY: '180deg'}]}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    commentContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.secondary,
        borderRadius: 15
    },
    authorContainer: {
        height: "30%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    commentSection: {
        height: "50%",
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    caption: {
        color: colors.white,

    },
    likeSection: {
        height: "20%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -10
    },
    likeText: {
        color: colors.white,
        fontSize: 14,
        marginHorizontal: 30
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: colors.white,
        marginRight: 5
    },
    userName: {
        marginLeft: 5,
        color: colors.white,
        fontSize: 16
    }
})
