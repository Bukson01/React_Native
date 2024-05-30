import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  function goalInputHandler(enteredText) {
    console.log(enteredText);
  };

  function addGoalHandler () {};

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal'onChangeText={goalInputHandler} />
        <Button title="Add Goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#000080'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000080',
    width: '70%',
    marginRight: 18,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
});
