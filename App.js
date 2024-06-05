import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals]=useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler () {
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals, enteredGoalText, 

    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal'onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>

      <View style={styles.goalsContainer}>
      <ScrollView keyboardDismissMode='on-drag' >
        {courseGoals.map((goal)=> (
        <View  key={goal} style= {styles.goalStyle}>
          <Text tyle= {styles.goalText}>{goal}</Text>
        </View>))}
      </ScrollView>
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
  goalStyle: {
    margin: 8,
    padding:8,
    borderRadius:6,
    backgroundColor: '#FF7F50',
  },
  goalText: {
    color: 'black',
  }
});
