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
            <View style={styles.button}> 
                <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}> 
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
        padding: 16,
        marginBottom: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#000080'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#000080',
        width: '100%',
        padding: 8
      },
      buttonContainer: {
        marginTop:10,
        flexDirection: 'row'
      },
      button: {
        width: '30%',
        marginHorizontal: 8,
      }
});