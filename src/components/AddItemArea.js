import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.View`
  background-color: #ccc;
  padding: 10px;
`;

const AddItemInput = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
`;

const AddItemArea = ({onAdd}) => {
  const [item, setItem] = useState('');

  const handleSubmit = () => {
    if (item.trim() !== '') {
      onAdd(item.trim());
      setItem('');
    }
  };

  return (
    <Container>
      <AddItemInput
        placeholder="Type a new item"
        value={item}
        onChangeText={(e) => setItem(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
      />
    </Container>
  );
};

export default AddItemArea;
