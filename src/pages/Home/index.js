import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './styles';

export default function Home() {
  const data = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.list}>
            <Text>Nome</Text>
            <Text> Data Nascimento </Text>
          </View>
        )}
      />
    </View>
  );
}
