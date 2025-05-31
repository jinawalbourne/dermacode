import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';
import productsRaw from '../data/products.json';

const products: Product[] = productsRaw as Product[];

// Debug: Warn if any product is missing a name
products.forEach((p, i) => {
  if (!p.name) console.warn(`⚠️ Product at index ${i} is missing a name`, p);
});

const SearchScreen = () => {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = normalizedQuery
  ? products.filter((product: Product) => {
      const nameMatch = product.name?.toLowerCase().includes(normalizedQuery);
      const brandMatch = product.brand?.toLowerCase().includes(normalizedQuery);
      return nameMatch || brandMatch;
    })
  : products;

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChangeText={setQuery} />
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => <ProductCard product={item} />}
        ListEmptyComponent={<Text style={styles.noResults}>No results found.</Text>}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: '#fff'
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888'
  }
});