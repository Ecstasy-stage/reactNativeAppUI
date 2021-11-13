import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from "../config/colors";

// import "../auth/firebase";
// import firebase from "@react-native-firebase/app";
// import "@react-native-firebase/auth";

// const auth = firebase.auth();



export default function AuthScreen() {
    const handleGglSignIn = () => {
        try {
            // let gglProvider = new firebase.auth.GoogleAuthProvider();
            // gglProvider.addScope("profile email");
            
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require("../assets/img/logo.jpeg")}
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={0.8} style={[styles.btn, styles.gglBtn]}>
                    <Text style={styles.btnText}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[styles.btn, styles.fbBtn]}>
                    <Text style={styles.btnText}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        width: '100%',
    },
    logoContainer: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"  
    },
    logo: {
        width: 240,
        height: 180,
        resizeMode: "stretch"
    },
    btnContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        minWidth: 200,
        width: "60%",
        height: 40,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    gglBtn: {
        marginBottom: 20,
    },
    fbBtn: {
        marginTop: 20,
    },
    btnText: {
        color: colors.white,
        fontSize: 18,
        letterSpacing: 0.35,
        padding: 5
    }
})
