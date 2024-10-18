import { View, Text ,StyleSheet ,TextInput ,SafeAreaView, FlatList,TouchableOpacity, Modal, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
const Home = () => {

const [input ,setInput] = useState('');
const [todo , setTodo] = useState<string[]>(['hello world'])
const [modalVisible , setModalVisible] = useState<boolean | string>(false)
const [index,setIndex] = useState<number>(0);
const [updatedValue , setUpdatedValue] = useState<string>("")
// ----------------- AddTodo--------------------//

function addTodo(){
if(input === ""){
  alert('Enter Todo to add in list')
}else{

  
  console.log(input)
  todo.push(input)
  setInput([...todo])
  // console.log(todo);
  
  setInput('')
}
}
// ----------------- DeleteTodo--------------------//




let deleteTodo = (index:number) => {
  console.log('todo deleted',index);
  todo.splice(index , 1 )
  setTodo([...todo])

}


// ----------------- EditTodo--------------------//


let editTodo = (index : number) => {

  // console.log(index)
  setModalVisible(true)
  // console.log(index, updatedValue);
  setIndex(index)
  todo.splice(index , 1,updatedValue)

// todo.splice(index,1)
}
 
function update() {
  setUpdatedValue('')
  setModalVisible(false)
}

return (
    <SafeAreaView>
   <Text style={styles.heading}>Todo App</Text>
    <TextInput
      style={styles.input}
      onChangeText={setInput}
      value ={input}
    placeholder='Enter Todo'
    />

<TouchableOpacity  activeOpacity={0.7} style={styles.button} onPress={addTodo}>
        <Text>Add Todo</Text>
      </TouchableOpacity>


{todo.length > 0 ? 
  <FlatList
        data={todo}
        renderItem={({item ,index}) => {
          return <View style={styles.item}>
<Text style={styles.title}>{item}</Text>

<TouchableOpacity  activeOpacity={0.7} style={styles.listbutton} onPress={() => {deleteTodo(index)}}>
        <Text>Delete Todo</Text>
      </TouchableOpacity>
<TouchableOpacity  activeOpacity={0.7} style={styles.listbutton}  onPress={() =>{editTodo(index)}}>
        <Text>Edit Todo</Text>
      </TouchableOpacity>
          </View>

        } }
/>
: <Text style={styles.notFound}>No Todo Found...</Text>

}



<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>     <TextInput
        style={styles.MadalInput}
        onChangeText={setUpdatedValue}
        value={updatedValue}
        placeholder='Enter updated Value'
      /></Text>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle} onPress={update}>Update Todo</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
      
        onPress={() => {editTodo(index)}}>
      </Pressable>
    </View>

  </SafeAreaView>
  )
}


const styles = StyleSheet.create({
 heading:{
textAlign:"center",
fontSize:20,
marginTop:10,
fontWeight:"bold"
 }
, 
  input: {
    height: 40,
    margin: 24,
    marginHorizontal:44,
    borderWidth: 1,
    padding: 10,
  },
  MadalInput: {
    height: 40,
    margin: 24,
    width:250,
    marginHorizontal:14,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    marginHorizontal:110,
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  listbutton: {
    alignItems: 'center',
    marginHorizontal:90,
    borderRadius:10,
    marginTop:10,
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  ret:{
backgroundColor:"black",
color:"white"
  },
  item: {
    backgroundColor: '#000000',
    borderRadius:25,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center'
  },
  notFound:{
    textAlign:"center",
  // flex:1,
  marginTop:30,
  // justifyContent:"center",
  fontSize:30,
  // alignItems:"center"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },



});



export default Home