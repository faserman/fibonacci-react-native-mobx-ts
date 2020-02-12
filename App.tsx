import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';
import { Navbar } from 'components/Navbar';
import { FibForm } from 'components/FibForm';
import { Result } from 'components/Result';
import { ResultList } from 'components/ResultList';

@observer
class App extends React.Component<{}> {
  render() {
    
    const { toggleView } = appStore;

    return (
      <View style={styles.app}>
        <Navbar />
        <View style={styles.container}>
          { toggleView ? <Result /> :
            <View>
              <FibForm />
              <ResultList />
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#252526',
  },
  container: {
    height: '100%',
    backgroundColor: '#252526',
  },
});

export default App;
