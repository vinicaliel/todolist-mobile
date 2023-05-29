import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function submitDataTask() {
    const taskInfo = {
      done: true,
      description: description,
      title: title
    }

    axios.post('http://192.168.0.10:3333/task', taskInfo)
      .then(response => {
        console.log('Tarefa enviada com sucesso:', response.data);
        setTitle('')
        setDescription('')
      })
      .catch(error => {
        console.error('Erro ao enviar tarefa:', error);

      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <TextInput
        style={styles.inputTitle}
        placeholder="Task title"
        placeholderTextColor="#9D9D9D"
        onChangeText={text => setTitle(text)}
        value={title}
      />

      <Text style={styles.description}>Descrrription</Text>
      <TextInput
        style={styles.inputDescription}
        multiline={true}
        numberOfLines={5}
        onChangeText={text => setDescription(text)}
        value={description}
      />
      <TouchableOpacity style={styles.buttonDone} onPress={submitDataTask}>
        <Text >Done</Text>
      </TouchableOpacity>
    </View>
  );
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
    marginLeft: 20,
    borderRadius: 5
  }
});

export default CreateTask;
