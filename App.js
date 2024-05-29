import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View styles={styles.inputContainer}>
        <TextInput placeholder='Your course goal'/>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List of goal...</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row'
  }
});
