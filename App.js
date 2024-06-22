import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/goalItem';
import Goalinput from './components/goalInput';

export default function App() {

  const [courseGoals, setCourseGoals]=useState([]);


  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}, 

    ]);
  };

  function deleteGoalHandler() {
    console.log('DELETE')
  };

  return (
    <View style={styles.appContainer}>
      <Goalinput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals}  renderItem={itemData =>{
        return <GoalItem 
                  text={itemData.item.text} 
                  onDeleteItem={deleteGoalHandler}/>;
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
