import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Task from '../components/Task'
import Icon from "react-native-vector-icons/Entypo"
import { Dialog, Button, TextInput } from "react-native-paper"
import { useDispatch, useSelector } from 'react-redux'
import { addTask, loadUser } from '../redux/action'


const Home = ({ navigation }) => {
  // const navigation = useNavigation()
  //onPress={()=> navigation.navigate("login")}
  const { user } = useSelector(state => state.Auth)

  const dispatch = useDispatch();

  const { loading, message, error } = useSelector(state => state.Message)
 

  const [openDialog, setopenDialog] = useState(false);
  const [title, setTitle] = useState(" ");
  const [descreption, setDescreption] = useState(" ");



  const hideDialog = () => {
    setopenDialog(!openDialog)
  }

  const addTaskHandler = async () => {
    await dispatch(addTask(title, descreption));
    dispatch(loadUser());
  }

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
      dispatch({ type: "clearError" });
    }
    if (message) {
      alert(message)
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, dispatch])

  return (
    <>
      <View style={{ backgroundColor: "white", flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>

        <ScrollView>
          <SafeAreaView>

            <Text style={styles.heading} >All Task</Text>
            {
             user && user.task.map((item) => (
                <Task key={item._id} title={item.title} description={item.description} status={item.completed} taskId={item._id} />
              ))

            }
            <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>

              <Icon name='add-to-list' size={20} color="#900" />


            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </View>

      <Dialog visible={openDialog} style={{ backgroundColor: "white" }} >
        <Dialog.Title>ADD A TASK</Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}


          />
          <TextInput
            style={styles.input}
            value={descreption}
            placeholder="Description"
            onChangeText={setDescreption}


          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={hideDialog} >
              <Text>CANCEL</Text>
            </TouchableOpacity>
            <Button onPress={addTaskHandler}>
              ADD
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>

    </>
  )
}

export default Home


const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    color: "white",
    backgroundColor: "skyblue",
  },
  addBtn: {
    backgroundColor: "#fff",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  }
})