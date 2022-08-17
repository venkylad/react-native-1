import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FocusedStatusBar, Header } from '../components';
import { LinearGradient } from 'expo-linear-gradient';

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 1 }}>
          <Header />
          <LinearGradient
            colors={['#3fbafe', '#1fe4f5']}
            style={[styles.card, styles.shadowProp]}
          >
            <Text style={styles.sub_title}>User ID: {data.userId}</Text>
            <View style={styles.hr} />
            <Text style={styles.sub_title}>Title:</Text>
            <Text style={styles.card_title}>{data.title}</Text>
            <View style={styles.hr} />
            <Text style={styles.sub_title}>Body:</Text>
            <Text style={styles.card_body}>{data.body}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.btn_text}>Back</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.bg}>
        <View style={styles.inner_bg1} />
        <View style={styles.inner_bg2} />
      </View>
    </SafeAreaView>
  );
};

export default Details;
const styles = StyleSheet.create({
  sub_title: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
    lineHeight: 26,
  },
  bg: {
    zIndex: -1,
    position: 'absolute',
    width: '100%',
    height: '100vh',
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
    backgroundColor: '#e3ffd5',
  },
  card: {
    minHeight: '200px',
    borderRadius: 18,
    padding: 40,
    margin: 20,
  },

  card_title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 22,
    marginBottom: 10,
  },

  card_body: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
  },
  shadowProp: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  btn: {
    backgroundColor: '#1c1b1b',
    width: '75px',
    padding: 8,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  btn_text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
  hr: {
    width: '100%',
    height: '1px',
    border: '1px solid #1c1b1b',
    opacity: 0.75,
    margin: 20,
    marginHorizontal: 0,
  },
});
