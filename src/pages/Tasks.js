import { StyleSheet, View, FlatList  } from 'react-native';
import CardTasks from '../components/CardTasks';

const mockTasks= [
    {title: 'Um Título', description: 'Umas descrição qualquer', key: '1'},
    {title: 'Um Título', description: 'Umas descrição qualquer', key: '2'},
    {title: 'Um Título', description: 'Umas descrição qualquer' , key: '3'},
    {title: 'Um Título', description: 'Umas descrição qualquer' , key: '4'}
]

const Tasks = () => {
    return(
        <View style={styles.container}>
            <FlatList
                tyle={styles.flatListTasks}
                numColumns={1}
                keyExtractor={(item) => item.key}
                data={mockTasks}
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