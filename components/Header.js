import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_title}>
        JSON <Text style={styles.header_title_inner}>Posts</Text>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header_title: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 34,
    color: 'white',
  },

  header_title_inner: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 34,
    color: '#33c8fa',
  },
});
