import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface IProps{
    width?: number | string,
    height?: number 
    bg?: string,
    mt?: number,
    mb?: number,
    m?: number,
    my?: number,
    mx?: number,
    align?: 'center' | 'flex-end' | 'flex-start'
}

const Divider = ({
    width = '90%',
    height = 1,
    bg = 'gray',
    mt,
    mb,
    m,
    my,
    mx,
    align,
}: IProps) => {
  return (
    <View style={{width: width, height: height, backgroundColor: bg, marginTop: mt, marginBottom: mb, margin: m, marginVertical: my, marginHorizontal: mx}} />
  )
}

export default Divider