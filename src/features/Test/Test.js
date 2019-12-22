import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { testStyle as styles } from './stylesheets'

const Test = () => {

    const inputRef = React.createRef()
    const [numInput, setNuminput ] = useState() 
    const [disabledBtn, setDisabledBtn ] = useState(true) 


    calculator = () => {
        const t = 3
        const num =  parseInt(numInput)
        const nth = t + num + num * num
        alert(`next sequence value = ${nth}`)
        setNuminput('')
        setDisabledBtn(true)
    }

    onChanged = (text) => {
      let newText = ''
      let numbers = '0123456789'
  
      for (var i=0; i < text.length; i++) {
          if(numbers.indexOf(text[i]) > -1 ) {
              newText = newText + text[i]
              setDisabledBtn(false)
          }
          else {
              alert("please enter numbers only")
          }
      }
      setNuminput(newText.toString())
      !newText && setDisabledBtn(true)
  }

    return (
      <View style={styles.container}>
        <Text style={styles.marginBottom50}>
          find the next value in the given sequence: 3, 5, 9, 15, and so forth 
        </Text>
        <Input
          placeholder='Find Number'
          onChangeText={onChanged}
          ref={inputRef}
          value={numInput}
        />
        <Button 
          title="Calculator"
          disabled={disabledBtn}
          onPress={calculator}
          style={styles.marginTop20}
        />
      </View>
    )
}

export default Test
