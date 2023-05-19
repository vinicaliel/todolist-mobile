import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

const CardTasks = ({Title, Description}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{Title}</Text>
                <Text style={styles.description}>{Description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#29323C'
  },
  card: {
    gap: 5,
    marginLeft: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: '#FFFFFF'
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.5
  }
});

export default CardTasks