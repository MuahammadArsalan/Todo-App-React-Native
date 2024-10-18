import { View, Text ,StyleSheet  } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView  } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

const Home = () => {

const [input , setinput] = useState(null)

  return (
    <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={setinput}
      value={input}
    />
    
  </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});



export default Home