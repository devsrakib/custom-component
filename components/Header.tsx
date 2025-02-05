import { View, Text } from 'react-native'
import React from 'react'
import Div from './Div'
import { Colors } from '../constants/Colors'
import CText from './CText'
import BackButton from './Back'

interface IProps {
  title?: string,
  titleColor?: string,
  titleSize?: string,
}

const Header = ({
  title = 'title',
  titleColor = Colors.black,
}: IProps) => {
  return (
    <Div
      height={60}
      width='100%'
      items='center'
      bg={Colors.white}
      gap={14}
      FD='row'
      px={20}
    >
<BackButton />
      <CText h2 color={titleColor} >{title}</CText>
    </Div>
  )
}

export default Header