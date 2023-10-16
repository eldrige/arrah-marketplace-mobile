import { useQuery } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GET_PRODUCTS } from './GQL/products';

export default function Home() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      take: 5,
      skip: 0,
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

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
