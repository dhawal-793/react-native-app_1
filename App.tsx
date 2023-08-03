import { View, StyleSheet } from 'react-native';
import FlatCards from './components/FlatCards';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatCards />
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
