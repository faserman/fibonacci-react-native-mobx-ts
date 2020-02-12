import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { ResultItem } from 'components/ResultItem';
import { appStore } from 'store/app';

export const ResultList = observer(props => {

  const { resultList } = appStore;

  return(
    <View style={styles.list}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={resultList}
        renderItem={({ item }) => <ResultItem result={item} />}
      />
    </View>
  )
});

const styles = StyleSheet.create({
  list: {
    height: '79%',
  }
})
