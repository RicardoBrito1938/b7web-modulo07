import React, {useState} from 'react';
import styled from 'styled-components/native';
import {v4 as uuidv4} from 'uuid';
import {SwipeListView} from 'react-native-swipe-list-view';
import AddItemArea from './src/components/AddItemArea';
import 'react-native-get-random-values';
import ListItem from './src/components/ListItem';
import list from './src/list';
import ListItemSwipe from './src/components/ListItemSwipe';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Scroll = styled.FlatList`
  flex: 1;
`;

const App = () => {
  const [items, setItems] = useState(list);

  const addNewItem = (text) => {
    const newItems = [...items];
    newItems.push({
      id: uuidv4(),
      task: text,
      done: false,
    });
    setItems(newItems);
  };

  const toogleDone = (index) => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems = newItems.filter((it, i) => i !== index);
    setItems(newItems);
  };

  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />

      <SwipeListView
        data={items}
        renderItem={({item, index}) => (
          <ListItem onPress={() => toogleDone(index)} data={item} />
        )}
        renderHiddenItem={({item, index}) => (
          <ListItemSwipe onDelete={() => deleteItem(index)} />
        )}
        leftOpenValue={50}
        disableLeftSwipe={true}
        keyExtractor={(item) => item.id}
      />
    </Page>
  );
};

export default App;
