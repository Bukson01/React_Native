import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';

import GoalItem from './components/goalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals]=useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler () {
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}, 

    ]);
  };

  return (
    <View style={styles.appContainer}>
      
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals}  renderItem={itemData =>{
        return <GoalItem text={itemData.item.text}/>;
      }}

      keyExtractor={(item, index)=>{
        return item.id;
      }}
      keyboardDismissMode='on-drag' 
      />

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

  goalsContainer: {
    flex: 5
  }
});
