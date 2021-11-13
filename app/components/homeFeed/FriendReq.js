import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity} from 'react-native'
import Constants from 'expo-constants';
import colors from "../../config/colors";


export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.heading}>
            <Text style={styles.HeadingCancel}>Cancel</Text>
            <Text style={styles.HeadingRequest}> Friend Request</Text>
            </View>
            <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
            <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 30, height: 30, borderRadius: 400/ 2}} 
            />
            <Text style={styles.NameHeading}>Shefali Garg</Text>
            <Text style={styles.RequestResponse}
            onPress={()=> Linking.openURL('www.google.com')}
            >Accept</Text>
            <Text style={styles.RequestResponse}
            onPress={()=> Linking.openURL('www.google.com')}
            >Decline</Text>
            </View>
            </View>
            <View style={styles.flexColumn}>
            </View>
            <View style={styles.flexColumn}>
            </View>
            <View style={styles.flexColumn}>
            </View>
            <View style={styles.flexColumn}>
            </View>
            <View style={styles.flexColumn}>
            </View>
            <View style={styles.flexColumn}>
            </View>
            
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'black',
  },
    flexRow: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
    },
    flexColumn:{
        height:80,
        borderColor: "#555555",
        borderBottomWidth:0.5,
        flexDirection: "column",
        alignItems: "baseline",
        justifyContent: "space-around",

    },
    heading:{
        fontSize:16,
        color: colors.white,
        height: 50,
        borderColor: "#555555",
        borderBottomWidth:1,
        width: "100%",
        flexDirection: "row",
        alignItems: "baseline",
    },
    HeadingCancel:{
        fontSize:14,
        color: colors.white,
        height: 50,
        width:"40%",
        paddingLeft:8
    },
    HeadingRequest:{
        fontSize:14,
        color: colors.white,
        height: 50,
        width:"60%",
    },
    NameHeading:{
        color: colors.white,
        fontSize:14,
        alignItems:'baseline',
        height:25,
        width:"50%",
        paddingLeft:5,
        justifyContent:'flex-start',
        paddingLeft:15
        
    },
    RequestResponse:{
        color: colors.primary,
        fontSize:14,
        textAlign:"right",
        width:"20%",
        height:25,
    },


})
