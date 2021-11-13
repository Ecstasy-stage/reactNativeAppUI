import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import colors from "../config/colors";

import { FontAwesome5 } from '@expo/vector-icons';

// import auth from "@react-native-firebase/auth";

export default function JoinScreen() {
    const iconClickHandler = () => {
        // play video code
    }

    return (
        <View style={styles.authMainContainer}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require("../assets/img/logo.jpeg")}
                />
                <TouchableHighlight 
                    style={styles.playIcon}
                    activeOpacity={0.9}
                    underlayColor="#7DD6FF"
                    onPress={iconClickHandler}
                >
                    <FontAwesome5 name="play" size={28} color={colors.primary}/>
                </TouchableHighlight>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={0.8} style={styles.joinArtistBtn}>
                    <Text style={styles.btnText}>Join as an artist</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.joinAudienceBtn}>
                    <Text style={styles.btnText}>Join as an audience</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    authMainContainer: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
    },
    logoContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 240,
        height: 180,
        resizeMode: "stretch",
        marginTop: -8,
        marginLeft: -6
    },
    playIcon: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    btnContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    joinArtistBtn: {
        minWidth: 200,
        width: "60%",
        height: 40,
        backgroundColor: colors.black,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    },
    joinAudienceBtn: {
        minWidth: 200,
        width: "60%",
        height: 40,
        backgroundColor: colors.black,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    },
    btnText: {
        color: colors.white,
        fontSize: 18,
        letterSpacing: 0.35,
        padding: 5
    }
})
