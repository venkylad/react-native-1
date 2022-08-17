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
    </SafeAreaView>
  );
};

export default Home;
