import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ItemList = ({ items }) => {
  return (
    <View style={{position: 'absolute', alignSelf: 'center', top: 400}}>
      <Text>Items:</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ItemList;
