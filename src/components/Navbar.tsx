import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Navbar = () => {

  return(
    <View style={styles.navbar }>
      <Text style={ styles.text }>&#966;</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1E1E1E',
    paddingBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 40,
  },
})
