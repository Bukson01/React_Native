import { StyleSheet } from 'react-native';

function GoalItem() {
    return (
        <View   style= {styles.goalStyle}>
            <Text tyle= {styles.goalText}>{ itemData.item.text }</Text>
        </View>)
};

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