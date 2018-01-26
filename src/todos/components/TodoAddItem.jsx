import React from 'react';
import TodoAddItemPanel from '../styles';
import { Input, Button } from '../../common/styles/components';

export const TodoAddItem =
    () => <TodoAddItemPanel><Input type="text" /><Button>Add</Button></TodoAddItemPanel>;
