import { View, StyleSheet } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

const App = (): JSX.Element => {
  return (
      <View style={styles.container}>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    gap: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
