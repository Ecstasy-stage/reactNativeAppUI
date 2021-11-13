import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, ActivityIndicator} from 'react-native';
import colors from "./config/colors";


import AuthScreen from './screens/JoinScreen';
import JoinScreen from './screens/AuthScreen';
import IntroVideoScreen from "./screens/IntroVideoScreen";

import { NavigationContainer } from "@react-navigation/native";

import "./auth/firebase";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import { AuthenticatedUserContext } from "./auth/AuthenticatedUserProvider"
import { useContext } from 'react';

const auth = firebase.auth();

export default function MainApp() {
    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubAuth = auth.onAuthStateChanged( async authenticatedUser => {
            try {
                await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        });
        return unsubAuth;
    }, []);

    if(isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
          );
    }
    return (
        <SafeAreaView style={styles.container}>
                {user ? <IntroVideoScreen /> : <JoinScreen />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
})
