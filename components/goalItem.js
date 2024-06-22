import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(prop) {
    return (
        <View   style= {styles.goalStyle}>
          <Pressable android_ripple={{color: '#dddddd'}} onPress={prop.onDeleteItem.bind(this, prop.id)}>
            <Text tyle= {styles.goalText}>{ prop.text }</Text>
          </Pressable>
        </View>
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
        padding:8,
      }
});