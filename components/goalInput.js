import { useState } from "react";
import { StyleSheet, TextInput, View,  Button, Modal } from "react-native";

function Goalinput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return ( 
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} placeholder='Your course goal'
            onChangeText={goalInputHandler} 
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style> 
                <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
            <View style> 
                <Button title="Cancel"/>
            </View>
            
          </View>
      </View>
    </Modal>
    );
};

export default Goalinput;

const styles=StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
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
      buttonContainer: {
        flexDirection: 'row'
      }
});