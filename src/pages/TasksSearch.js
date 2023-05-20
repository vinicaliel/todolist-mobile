import { StyleSheet, View, FlatList, Text, TextInput, TouchableOpacity} from 'react-native';

const TasksSearch = () => {
    return(
        <View style= {styles.container}>
            <TextInput
              style={styles.inputSearch}
              placeholder="Task title"
              placeholderTextColor= "#9D9D9D" 
            />
            <TouchableOpacity>
                <Text></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B2128'
    }
});

export default TasksSearch
