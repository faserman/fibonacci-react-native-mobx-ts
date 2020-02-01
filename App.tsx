import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';

@observer
class App extends React.Component<{}> {
  render() {
    const { value, result } = appStore;
    const onChangeText = (text: string) => {
      appStore.setValue(text);
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        <Button 
          title='.....'
          onPress={ appStore.calculationNumberFibonacci }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#49B8EC',
  },
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
});

export default App;
