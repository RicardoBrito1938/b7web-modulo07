import React from 'react';
import styled from 'styled-components';

const Item = styled.TouchaableHighlight`
  background-color: #eee;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  padding-horizontal: 20px;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #ccc;
  background-color: ${(props) => (props.done ? '#ccc' : 'transparent')};
`;

const ListItem = ({data, onPress}) => (
  <Item onPress={onPress} underlayColor="#ddd" activeOpacity={1}>
    <>
      <ItemText>{data.task}</ItemText>
      <ItemCheck done={data.done} />
    </>
  </Item>
);

export default ListItem;
