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
import { useNavigation } from '@react-navigation/native';

const Details = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
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

            <Text style={styles.sub_title}>Title:</Text>
            <Text style={styles.card_title}>{data.title}</Text>

            <Text style={styles.sub_title}>Body:</Text>
            <Text style={styles.card_body}>{data.body}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btn_text}>Back</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
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
  card: {
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

  btn_text: {
    backgroundColor: '#1c1b1b',
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    padding: 8,
    margin: 5,
    borderRadius: 10,
  },
});
