import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ItemInput = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');

  const handleSave = () => {
    onAddItem(itemName);
    setItemName('');
  };

  return (
    <View style={{position: 'absolute', alignSelf: 'center', top: 300}}>
      <TextInput
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default ItemInput;
