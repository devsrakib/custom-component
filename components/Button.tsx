import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface IProps {
  title?: string,
  icon?: any,
  iconLeft?: boolean,
  iconRight?: boolean,
  gap?: number,
  align?: 'center' | 'flex-end' | 'flex-start',
  items?: 'center',
  rounded?: number,
  height?: number,
  width?: number | string,
  m?: number,
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  bg?: string,
  p?: number,
  pt?: number,
  pb?: number,
  px?: number,
  py?: number,
  pr?: number,
  pl?: number,
  flex?: boolean,
  fontSize?: number,
  FW?: string,
  titleColor?: string,
  justify?: string,
  onPress?: () => void,
}

const Button = ({
  title = 'Button',
  icon,
  iconLeft,
  iconRight = true,
  gap = 20,
  align,
  items = 'center',
  rounded = 8,
  height = 50,
  width = '90%',
  m,
  mt,
  mb,
  mr,
  ml,
  bg = 'blue',
  p,
  pt,
  pb,
  px = 5,
  py = 10,
  pr,
  pl,
  flex,
  fontSize = 16,
  FW = '700',
  titleColor = 'white',
  justify = 'center',
  onPress,
}: IProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={{
      flexDirection: iconLeft ? 'row' : iconRight ? 'row-reverse' : 'row',
      gap: gap,
      alignSelf: align,
      alignItems: items,
      borderRadius: rounded,
      height: height,
      width: width,
      margin: m,
      marginTop: mt,
      marginBottom: mb,
      marginRight: mr,
      marginLeft: ml,
      backgroundColor: bg,
      padding: p,
      paddingTop: pt,
      paddingBottom: pb,
      paddingHorizontal: px,
      paddingVertical: py,
      paddingRight: pr,
      paddingLeft: pl,
      flex: flex ? 1 : null,
      justifyContent: justify
    }}>
      {<>

        {icon}
        <Text style={{
          color: titleColor, fontSize: fontSize,
          fontWeight: FW
        }}>{title}</Text>
      </>
      }
    </TouchableOpacity>
  )
}

export default Button