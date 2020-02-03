import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';

export const Result = observer(props => {
  const { result, addResultInList /*clearResult*/ } = appStore;

  return(
    <TouchableOpacity
      onPress={() => addResultInList()/*clearResult(false)*/}
    >
      <View style={styles.result}>
        <Text style={styles.text}>{ result }</Text>
      </View>
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#333333'
  },
  text: {
    color: '#fff'
  }
})