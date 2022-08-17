import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

const FocusedStatusBar = () => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar style='auto' backgroundColor='skyblue' />
  ) : null;
};

export default FocusedStatusBar;
