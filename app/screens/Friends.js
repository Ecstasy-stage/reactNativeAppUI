import React, {useState} from 'react';
 
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AllFriend from '../components/homeFeed/FriendCustom';
import AddFriend from '../components/homeFeed/AddFriend';
import colors from "../config/colors"; 


export default function Dashboard({navigation}) {
  const onSelectSwitch = index => {
  };
 
  return (
    <View style={styles.Container}>
      <Text style={styles.heading}>
        Friends
      </Text>
      <View style={styles.switch}>
        <AllFriend
          selectionMode={1}
          roundCorner={true}
          option1={'Friends'}
          option2={'Add Friend'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'#A9A9A9'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
      flex: 1,
      backgroundColor: colors.black,
      width: "100%",
      height: "100%",
      color: colors.white,
  },
  heading:{
    color:colors.white,
    fontSize:20,
    textAlign:'center'
  },
  switch:{
    alignItems: 'center',
    margin: 20
  }
})
