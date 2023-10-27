import ItemModel from '../models/ItemModel';

export default class ItemViewModel {
  constructor() {
    this.items = [];
  }

  addItem(name) {
    const newItem = new ItemModel(this.items.length + 1, name);
    this.items.push(newItem);
  }

  getItems() {
    return this.items;
  }
}
