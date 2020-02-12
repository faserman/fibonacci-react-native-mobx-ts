import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';

export const ResultItem = observer(props => {
  const { deleteResult } = appStore;

  return(
    <TouchableOpacity
      onLongPress={() => deleteResult(props.result.id)}
    >
      <View style={styles.result}>
        <Text style={styles.textResult}>{ props.result.serialNumber } => { props.result.result }</Text>
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
    borderColor: '#49B8EC',
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#333333'
  },
  textResult: {
    color: '#fff',
    fontSize: 17,
  }
})