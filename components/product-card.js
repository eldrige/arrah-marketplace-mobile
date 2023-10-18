import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
export const ProductCard = ({ imageURL, name, price, currency }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageURL }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.label}>Product name : </Text>
          <Text style={styles.label}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Product price : </Text>
          <Text style={styles.label}>{price}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Product currency : </Text>
          <Text style={styles.label}>{currency}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#767A90',
    borderWidth: 1,
    marginBottom: 20,
  },
  info: {
    flexDirection: 'column',
    height: '40%',
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  row: { flexDirection: 'row' },
  label: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '400',
    marginBottom: 10,
  },
});
