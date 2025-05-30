import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What would you like to do?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Search' as never)}
      >
        <Text style={styles.buttonText}>🔍 Search for a product</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Scan screen coming soon')}
      >
        <Text style={styles.buttonText}>📷 Scan a barcode</Text>
      </TouchableOpacity>

    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});