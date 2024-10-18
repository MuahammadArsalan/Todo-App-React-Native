import { View, Text ,StyleSheet ,TextInput ,SafeAreaView, FlatList,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const Home = () => {

const [input ,setInput] = useState('');
  const [todo , setTodo] = useState<string[]>(['hello world'])
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

<TouchableOpacity  activeOpacity={0.7} style={styles.listbutton} onPress={addTodo}>
        <Text onPress={() => {deleteTodo(index)}}>Delete Todo</Text>
      </TouchableOpacity>
<TouchableOpacity  activeOpacity={0.7} style={styles.listbutton} onPress={addTodo}>
        <Text onPress={editTodo}>Edit Todo</Text>
      </TouchableOpacity>
          </View>

        } }
/>
: <Text style={styles.notFound}>No Todo Found...</Text>

}

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
  }



});



export default Home