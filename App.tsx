import React from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';
import { FibForm } from 'components/FibForm';
import { Result } from 'components/Result';

@observer
class App extends React.Component<{}> {
  render() {
    const { result } = appStore;

    return (
      <View style={styles.container}>
        { result ? <Result /> : <FibForm /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
