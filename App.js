import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/goalItem';
import Goalinput from './components/goalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals]=useState([]);

  function startAddGoalHandler () {
    setModalIsVisible(true);
  }


  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}, 

    ]);
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
        <Button 
          title='Add Goal' 
          color='#FF7F50' 
          onPress={startAddGoalHandler}
        />
        <Goalinput visible ={modalIsVisible} onAddGoal={addGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals}  renderItem={itemData =>{
            return <GoalItem 
                      text={itemData.item.text} 
                      id={itemData.item.id}
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
