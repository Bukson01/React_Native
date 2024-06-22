import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(prop) {
    return (
      <Pressable android_ripple={{color: '#dddddd'}} onPress={prop.onDeleteItem.bind(this, prop.id)}>
        <View   style= {styles.goalStyle}>
            <Text tyle= {styles.goalText}>{ prop.text }</Text>
        </View>
      </Pressable>
      )
}

export default GoalItem;

const styles = StyleSheet.create({
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