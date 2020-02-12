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
        <Text style={styles.text}> calculate the fibonacci number </Text>
      </TouchableOpacity>
    </View>
  )
});

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 5,
  },
  input: {
    width: '98%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#49B8EC',
    borderRadius: 5,
    color: '#F1F3F4',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#519ABA',
    padding: 15,
    marginTop: 3,
    borderRadius: 4,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 17,
  }
})