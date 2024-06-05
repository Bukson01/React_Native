import { useState } from "react";
import { StyleSheet, TextInput, View,  Button } from "react-native";

function Goalinput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    return <View style={styles.inputContainer}>
    <TextInput style={styles.textInput} placeholder='Your course goal'onChangeText={goalInputHandler} />
    <Button title="Add Goal" onPress={props.onAddGoal}/>
  </View>; 
};

export default Goalinput;

const styles=StyleSheet.create({
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
});