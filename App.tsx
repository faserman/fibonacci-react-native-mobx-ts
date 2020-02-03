import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';
import { FibForm } from 'components/FibForm';
import { Result } from 'components/Result';
import { ResultItem } from 'components/ResultItem';

@observer
class App extends React.Component<{}> {
  render() {
    const { toggleView, resultList } = appStore;

    return (
      <View style={styles.container}>
        { toggleView ? <Result /> : <FibForm /> }

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={resultList}
          renderItem={({ item }) => <ResultItem result={item} />}
        />
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
