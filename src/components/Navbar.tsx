import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Navbar = () => {

  return(
    <View style={styles.navbar }>
      <Text style={ styles.text }>
        <Text style={styles.fi}>&#966;</Text>bonacci
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1E1E1E',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    marginTop: 20
  },
  fi: {
    color: '#49B8EC',
    fontSize: 30,
  }
})
