import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import CardTasks from '../components/CardTasks';
import Axios from 'axios';

const TasksSearch = () => {
    const [taskSearch, setTasksSearch] = useState([]);
    const [titleTaskInput, setTitleTaskInput] = useState('');

    const searchTask = () => {
        try {
            Axios.get(`http://192.168.0.10:3333/task/id/?id=${titleTaskInput}`)
                .then((response) => {
                    setTasksSearch([response.data]);
                });

        } catch (err) {
            console.log(err.message);
        }
    };

    //so para debugar
    useEffect(() => {
        console.log(taskSearch);
    }, [taskSearch]);

    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <TextInput
                    style={styles.inputSearch}
                    placeholder="Task title"
                    placeholderTextColor="#9D9D9D"
                    onChangeText={(value) => setTitleTaskInput(value)}
                />
                <TouchableOpacity style={styles.buttonSearch} onPress={searchTask}>
                    <FontAwesome name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.flatListTasks}
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={taskSearch}
                renderItem={({ item }) => (
                    <CardTasks Title={item.title} Description={item.description} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B2128'
    },
    inputSearch: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#50DD99',
        borderRadius: 10,
        width: 300,
        color: '#FFFFFF'
    },
    containerSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 15,
        marginBottom: 20
    },
    buttonSearch: {
        width: 40,
        height: 40,
        backgroundColor: '#50DD99',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default TasksSearch;