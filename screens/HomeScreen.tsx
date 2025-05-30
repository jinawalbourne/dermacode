import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DERMACODE</Text>
      <Text style={styles.tagline}>Let’s evolve your skincare routine.</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Main' as never)}
      >
        <Text style={styles.buttonText}>Let’s Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222'
  },
  tagline: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666'
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});