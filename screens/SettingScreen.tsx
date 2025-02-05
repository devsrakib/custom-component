import { View, Text } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper'
import Div from '../components/Div'

const SettingScreen = () => {
    const navigation:any = useNavigation()
    const [checked, setChecked] = React.useState('first');

  return (
    <Div>
      <Button onPress={() => navigation.navigate('random')} />
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    </Div>
  )
}

export default SettingScreen