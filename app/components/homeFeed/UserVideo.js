import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

import { Video, AVPlaybackStatus } from 'expo-av';
const landscapeVideo = require("../../assets/video/landscapeModeVideo.mp4");
const portraitVideo = require("../../assets/video/portraitModeVideo.mp4");

import { Ionicons } from '@expo/vector-icons';

export default function UserVideo() {
    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
        <View style={styles.userVideoContainer}>

            <View style={styles.userProfile}></View>

            <View style={styles.videoContainer}>

                <View style={styles.userName}>
                    <Text style={styles.userNameText}>User Name</Text>
                </View>

                <View style={styles.videoPlayer}>
                    <Video 
                        ref={video}
                        source={landscapeVideo}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                        style={styles.video}
                    />
                </View>

                <View style={styles.descContainer}>
                    <Text style={styles.title}>Video Title</Text>
                    <Text numberOfLines={3} style={styles.desc}>Description of the video. This is the description of the video for the above video. I think this description is good. So read it properly. Thank You. One more is the</Text>
                </View>

                <View style={styles.watchContainer}>
                    <Ionicons name="eye" size={18} color="white" style={styles.liveIcon}/>
                    <Text style={styles.liveCount}>10M</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userVideoContainer: {
        flex: 1,
        width: "100%",
        borderRadius: 15,
        backgroundColor: colors.secondary,
        alignItems: "center"
    },
    userProfile: {
        position: "absolute",
        top: -33,
        width: 66,
        height: 66,
        borderRadius: 66,
        backgroundColor: colors.white
    },
    videoContainer: {
        width: "100%",
        flex: 1,
        marginTop: 33,
        justifyContent: "space-evenly"
    },
    userName: {
        alignSelf: "center",
        height: "10%",
        // borderColor: "white",
        // borderWidth: 1,
        justifyContent: "center"
    },
    userNameText: {
        color: colors.white,
        fontSize: 15,
        fontWeight: "bold"
    },
    videoPlayer: {
        width: "100%",
        height: "50%",
        // borderColor: "white",
        // borderWidth: 1,
        marginVertical: 5
    },
    video: {
        height: "100%",
        marginHorizontal: 6,
        borderRadius: 16,
        backgroundColor: colors.black
    },
    descContainer: {
        height: "20%",
        paddingHorizontal: 18
    },
    title: {
        color: colors.white,
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold"
    },
    desc: {
        color: colors.white,
        fontSize: 14
    },
    watchContainer: {
        height: "10%",
        flexDirection: "row",
        alignItems: "center"
    },
    liveCount: {
        color: colors.white,
        marginLeft: 5,
        fontSize: 14
    },
    liveIcon: {
        marginLeft: 20
    }
})
