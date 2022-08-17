import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Card = ({ data }) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#3fbafe', '#1fe4f5']}
      style={[styles.card, styles.shadowProp]}
    >
      <Text style={styles.card_title}>{data.title}</Text>
      <Text style={styles.card_body}>{data.body}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { data })}
      >
        <Text style={styles.btn_text}>More Info</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 20,
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
