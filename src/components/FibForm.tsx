import React from 'react';
import { StyleSheet, Button, TextInput, View} from 'react-native';
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
      <Button
        title='...........'
        //style={styles.button}
        onPress={ calculationNumberFibonacci }
      />
    </View>
  )
});

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#49B8EC',
    color: '#F1F3F4',
  },
})