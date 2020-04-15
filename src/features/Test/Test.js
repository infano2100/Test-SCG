import React, { useState, useReducer } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { testStyle as styles } from './stylesheets'
import reducers from '../../redux/reducers'
import { addInput } from '../../redux/actions'

const Test = () => {

  const [dataInput, dispatch] = useReducer(reducers, 0)
  const inputRef = React.createRef()
  const [disabledBtn, setDisabledBtn] = useState(true)

  calculator = () => {
    const t = 3
    const num = parseInt(dataInput)
    const nth = t + num + num * num
    alert(`next sequence value = ${nth}`)
    dispatch(addInput(''))
    setDisabledBtn(true)
  }

  onChanged = (text) => {
    let newText = ''
    let numbers = '0123456789'

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i]
        setDisabledBtn(false)
      }
    }
    dispatch(addInput(newText.toString()))
    !newText && setDisabledBtn(true)
  }

  const textMessgae = 'find the next value in the given sequence: 3, 5, 9, 15, and so forth'

  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom50}>{textMessgae}</Text>
      <Input
        placeholder='Find Number'
        onChangeText={onChanged}
        ref={inputRef}
        value={dataInput}
      />
      <View style={styles.marginTop20}>
        <Button
          title="Calculator"
          disabled={disabledBtn}
          onPress={calculator}
          style={styles.marginTop20}
        />
      </View>
    </View>
  )
}

export default Test
