import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Product } from '../types/Product';
import comedogenic from '../data/comedogenicIngredients.json';

const ProductCard = ({ product }: { product: Product }) => {
  const flagged = product.ingredients.filter((ingredient: string) =>
    (comedogenic as string[]).includes(ingredient)
  );

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>by {product.brand}</Text>
      <Text>Ingredients:</Text>
      {product.ingredients.map((ing, idx) => (
        <Text key={idx} style={flagged.includes(ing) ? styles.bad : undefined}>
          {ing}
        </Text>
      ))}
      {flagged.length > 0 ? (
        <Text style={styles.warning}>⚠️ {flagged.length} comedogenic ingredient(s) found</Text>
      ) : (
        <Text style={styles.safe}>✅ No pore-clogging ingredients</Text>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  },
  brand: {
    color: '#666',
    marginBottom: 8
  },
  bad: {
    color: '#b30000'
  },
  warning: {
    marginTop: 8,
    color: '#b30000',
    fontWeight: 'bold'
  },
  safe: {
    marginTop: 8,
    color: '#008000',
    fontWeight: 'bold'
  }
});