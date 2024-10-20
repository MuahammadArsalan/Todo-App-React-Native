import { View, Text ,StyleSheet ,TextInput ,SafeAreaView, FlatList,TouchableOpacity, Modal, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
const Home = () => {

const [input ,setInput] = useState('');
const [todo , setTodo] = useState<string[]>(['hello world'])
const [modalVisible , setModalVisible] = useState<boolean | string>(false)
const [index,setIndex] = useState<number>(0);
const [updateVal , setUpdateVal] = React.useState('')


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
  
  // console.log(index);
  setIndex(index)
  setModalVisible(true)
  setUpdateVal(todo[index])

}
function update() {
  setModalVisible(false)
  todo.splice(index,1,updateVal)
  setTodo([...todo])  
setUpdateVal('')  
  

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

          <TextInput
        style={styles.MadalInput}
        onChangeText={setUpdateVal}
        value={updateVal}
        // placeholder='Enter updated value'
      />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => 
              // setModalVisible(!modalVisible)
update()  
            }>
              <Text style={styles.textStyle}>Update</Text>
            </Pressable>

            <TouchableOpacity style={styles.cancel}>
        <Text style={styles.close} onPress={() =>{setModalVisible(false)}}>Close</Text>
      </TouchableOpacity>

          </View>
        </View>
      </Modal>
      <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => {editTodo(index)}}>
        <Text style={styles.textStyle}>Edit</Text>
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
, cancel:{

  backgroundColor: 'red',
  color:"white",
padding:10,
marginTop:20,
marginLeft:180,
textAlign:"center",
width:60


},
close:{
color:"white"
},
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
    backgroundColor: '#808080',
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
    marginTop: 172,
  },
  modalView: {
    // margin: 20,
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
    width:100,
    fontSize:15
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },



});


export default Home