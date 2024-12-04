import {View, Text} from 'react-native';
import React from 'react';

const ChangeNum = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
};

export {ChangeNum};
