import React from 'react';
import { View } from 'react-native';
import ItemInput from '../components/ItemInput';
import ItemList from '../components/ItemList';
import ItemViewModel from '../viewModels/ItemViewModel';

const itemListViewModel = new ItemViewModel();

const ItemListScreen = () => {
  const handleAddItem = (name) => {
    itemListViewModel.addItem(name);
  };

  return (
    <View>
      <ItemInput onAddItem={handleAddItem} />
      <ItemList items={itemListViewModel.getItems()} />
    </View>
  );
};

export default ItemListScreen;
