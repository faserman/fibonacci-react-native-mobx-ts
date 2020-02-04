import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';

export const FibForm = observer(props => {

  const { calculationNumberFibonacci, value } = appStore;

  const onChangeText = (text: string) => {
    appStore.setValue(text);
  };

  return(

    <View style={styles.form} >
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder='Enter the serial number...'
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={ calculationNumberFibonacci }
      >
        <Text> calculate the fibonacci number </Text>
      </TouchableOpacity>
    </View>
  )
});

const styles = StyleSheet.create({
  form: {
    /*flex: 1,
    justifyContent: 'center',
    alignItems: 'center',*/
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  input: {
    width: '90%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#49B8EC',
    color: '#F1F3F4',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#519ABA',
    padding: 10,
    marginTop: 3
  }
})