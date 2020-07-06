import React from 'react';
import styled from 'styled-components/native';

const ListItemSw = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  background-color: '#ff0000';
  justify-content: center;
`;

const ListItemIcon = styled.View`
  width: 20px;
  height: 20px;
  background-color: #fff;
  margin-left: 20px;
`;

const ListItemSwipe = ({onDelete}) => (
  <ListItemSw onPress={onDelete} underlayColor="#ff3333">
    <ListItemIcon></ListItemIcon>
  </ListItemSw>
);

export default ListItemSwipe;
