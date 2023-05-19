import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

const CreateTask = () => {
    return(
    <View style = {styles.container}>

        <Text style={styles.title}>Title</Text>
        <TextInput
            style={styles.inputTitle}
            placeholder="Task title"
            placeholderTextColor= "#9D9D9D" 
        />

        <Text style={styles.description}>Description</Text>
        <TextInput
            style={styles.inputDescription}
            multiline={true}
            numberOfLines={5}
        />
        <TouchableOpacity style={styles.buttonDone}>
            <Text>Done</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B2128'
    },
    title: {
        color: '#FFFFFF',
        marginTop: 20,
        marginLeft: 20,
    },
    inputTitle: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#50DD99',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 5,
        marginLeft: 20,
        width: 250,
        color: '#FFFFFF'
    },
    description: {
        color: '#FFFFFF',
        marginTop: 20,
        marginLeft: 20,
    },
    inputDescription: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#50DD99',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 5,
        marginLeft: 20,
        width: 250,
        height: 100,
        color: '#FFFFFF',
        textAlignVertical: 'top'
    },
    buttonDone: {
        width: 70,
        height: 30,
        backgroundColor: '#50DD99',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20,
        borderRadius: 5
    }
});

export default CreateTask
