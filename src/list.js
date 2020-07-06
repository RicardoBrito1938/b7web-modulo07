import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export default [
  {id: uuidv4(), task: 'do XYZ0', done: false},
  {id: uuidv4(), task: 'todo', done: true},
  {id: uuidv4(), task: 'do ert', done: false},
  {id: uuidv4(), task: 'do XYZ0', done: false},
  {id: uuidv4(), task: 'todo', done: true},
  {id: uuidv4(), task: 'do ert', done: false},
];
