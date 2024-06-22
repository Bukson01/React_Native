import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(prop) {
    return (
        <View   style= {styles.goalStyle}>
          <Pressable 
              android_ripple={{color: '#dddddd'}} 
              onPress={prop.onDeleteItem.bind(this, prop.id)}
              style={({pressed}) => pressed && styles.pressItem}
          >
            <Text style= {styles.goalText}>{ prop.text }</Text>
          </Pressable>
        </View>
      )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalStyle: {
        margin: 8,
        borderRadius:6,
        backgroundColor: '#FF7F50',
      },
      pressItem: {
        opacity: 0.9,
      },
      goalText: {
        color: 'black',
        padding:8,
      }
});