import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Div from './Div'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}  style={{width: 40,
      height: 40,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {
        <Icon name="rocket" size={30} color="#900" /> 
      }
    </TouchableOpacity>
  )
}

export default BackButton