import { useQuery } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { GET_PRODUCTS } from './GQL/products';
import { ProductCard } from './components/product-card';

export default function Home() {
  const [cursor, setCursor] = useState(10);
  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      take: 20,
      skip: cursor,
    },
  });

  if (loading)
    return (
      <View>
        <Text>Loading.....</Text>
      </View>
    );

  if (error)
    return (
      <SafeAreaView>
        <View>
          <Text>An error occured</Text>
        </View>
      </SafeAreaView>
    );

  const renderItem = ({ item }) => {
    return (
      <ProductCard
        name={item.name}
        imageURL={item.image}
        price={item.amount}
        currency={item.currency}
      />
    );
  };

  const handleFetchMore = () => {
    let newCursor = cursor + 10;
    setCursor(newCursor);
    fetchMore({
      variables: {
        skip: newCursor,
      },
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={data.products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          onEndReached={handleFetchMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<ActivityIndicator size="large" color="black" />}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
