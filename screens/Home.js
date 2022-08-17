import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Card, FocusedStatusBar, Header } from '../components';

const Home = () => {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 1 }}>
          {posts && (
            <FlatList
              data={posts}
              renderItem={({ item }) => <Card data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={Header}
            />
          )}
        </View>
      </View>
      <View style={styles.bg}>
        <View style={styles.inner_bg1} />
        <View style={styles.inner_bg2} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  bg: {
    zIndex: -1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  inner_bg1: {
    width: '100%',
    height: ' 40%',
    backgroundColor: '#07071c',
    opacity: 0.9,
  },

  inner_bg2: {
    width: '100%',
    height: ' 60%',
  },
});
