import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';


  function TasksScreen() {
    const tasks = [
        { id: 1, title: "Renew Account", date: "24/01/2022", content: "Your account is headed for termination if you don't renew your subscription" },
        { id: 2, title: "Spray Pesticides", date: "24/01/2022", content: "Your account is headed for termination if you don't renew your subscription" },
        { id: 3, title: "Zone 2- Danger", date: "24/01/2022", content: "Your account is headed for termination if you don't renew your subscription" },
        { id: 4, title: "Plant Health is low1", date: "24/01/2022", content: "Your account is headed for termination if you don't renew" },
        { id: 5, title: "Plant Health is low2", date: "24/01/2022", content: "Your account is headed for termination if you don't renew" },
        { id: 6, title: "Plant Health is low3", date: "24/01/2022", content: "Your account is headed for termination if you don't renew" },
        { id: 7, title: "Plant Health is low4", date: "24/01/2022", content: "Your account is headed for termination if you don't renew" },
        { id: 8, title: "Plant Health is low5", date: "24/01/2022", content: "Your account is headed for termination if you don't renew" },
      ];
    return (
      <View style={styles.container}>
          <ScrollView style={styles.taskContainer}>
            <View>
            {tasks.map(task => {
                return (
                    <View key={task.id} style={styles.contentContainer}>
                        <View style={styles.contentHeader}>
                            <Text style={styles.taskTitle}> {task.title} </Text>
                            <Text style={styles.taskDate}> {task.date} </Text>
                        </View>
                        <View style={styles.contentSub}>
                            <Text style={styles.taskContent}>
                                {task.content}
                            </Text>
                        </View>
                    </View>
                )
            })}
            </View>
          </ScrollView>
      </View>
    );
  }

  export default TasksScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      width: Dimensions.get("screen").width, //for full screen
      height: Dimensions.get("window").height,   
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskContainer: {
        height: '90%',
        width: '94%',
      },
    contentContainer: {
        borderWidth: 0,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 100,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        padding: 8,
    },
    contentHeader: {
        height: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentSub: {
        height: 65,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    taskTitle: {
        fontSize: 15,
        fontWeight: 'bold',    
        color: '#e28',
    },
    taskDate: {
        fontSize: 14,
        fontWeight: 'bold',    
        color: '#333',
    },
    taskContent: {
        fontSize: 14,
        color: '#333',
    },
  });
