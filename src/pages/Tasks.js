import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import CardTasks from '../components/CardTasks';
import Axios from 'axios';

const Tasks = () => {
    const navigation = useNavigation()
    const [taskDB, setTaskDB] = useState([])

    //get na api
    const allDataTasks = () => {
        try {
            Axios.get('http://192.168.0.10:3333/task')
                .then((response) => {
                    setTaskDB(response.data.reverse())
                })
    
        } catch (err) {
            console.log(err.message)
        }
    }

    //get na api quando o usuario vai para a tela de tasks
    useEffect(() => {
        const focus = navigation.addListener('tabPress', () => {
            console.log('foi')
            allDataTasks()
        });
        return focus
    }, [navigation])

    //get na api quando renderiza o app
    useEffect(() => allDataTasks(), [])

    return (
        <View style={styles.container}>
            <FlatList
                tyle={styles.flatListTasks}
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={taskDB}
                renderItem={({ item }) => (
                    <CardTasks Title={item.title} Description={item.description} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B2128'
    }
});

export default Tasks