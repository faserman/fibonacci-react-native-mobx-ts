import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';
import { Navbar } from 'components/Navbar';
import { FibForm } from 'components/FibForm';
import { Result } from 'components/Result';
import { ResultItem } from 'components/ResultItem';

@observer
class App extends React.Component<{}> {
  render() {
    const { toggleView, resultList } = appStore;

    return (
      <View>
        <Navbar />
          <View style={styles.container}>
            { toggleView ? <Result /> :
              <View>
                <FibForm />
                <FlatList
                  keyExtractor={item => item.id.toString()}
                  data={resultList}
                  renderItem={({ item }) => <ResultItem result={item} />}
                />
              </View>
            }
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    /*flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',*/
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#252526',
  },
});

export default App;
