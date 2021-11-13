import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import Comments from './Comments';
import LikesContainer from './LikesContainer';
import UserVideo from './UserVideo';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const feedContainerHeight = screenHeight - 55;

export default function HomeFeed() {

    return (
        <ScrollView horizontal={true} style={styles.userFeedScroll} snapToAlignment="center">
            <View style={styles.feedContainer}>
                <View style={styles.userContainer}>
                    <UserVideo />
                </View>
                <View style={styles.likesContainer}>
                    <LikesContainer />
                </View>
                <View style={styles.commentsContainer}>
                    <Comments />
                </View>
            </View>
            <View style={styles.feedContainer}>
                <View style={styles.userContainer}>
                    <UserVideo />
                </View>
                <View style={styles.likesContainer}>
                    <LikesContainer />
                </View>
                <View style={styles.commentsContainer}>
                    <Comments />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    userFeedScroll: {
        flex: 1
    },
    feedContainer: {
        width: screenWidth,
        height: feedContainerHeight
    },
    userContainer: {
        // borderColor: "white",
        // borderWidth: 1,
        height: feedContainerHeight * 0.7,
        paddingHorizontal: 10,
        paddingTop: 55,
        paddingBottom: 20
    },
    likesContainer: {
        height: feedContainerHeight * 0.08,
        paddingHorizontal: 10,
    },
    commentsContainer: {
        height: feedContainerHeight * 0.2,
        paddingHorizontal: 10,
        paddingTop: 20
    }
})
