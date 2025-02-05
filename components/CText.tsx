import { Text } from 'react-native'
import React from 'react'

interface IProps {
    h1?: boolean,
    h2?: boolean,
    h3?: boolean,
    h4?: boolean,
    h5?: boolean,
    h6?: boolean,
    color?: string,
    align?: "center" | "auto" | "left" | "right" | "justify" | undefined,
    numberOfLine?: number,
    children: string,
    mt?: number,
    mb?: number,
    m?: number,
    mr?: number,
    ml?: number,
    fontSize?:number
    FW?: string
}

const CText = ({
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    color,
    align,
    numberOfLine,
    children,
    mt,
    mb,
    m,
    mr,
    ml,
    fontSize,
    FW,
}: IProps) => {

    return (
        <Text 
            style={{
                fontSize: h1 ? 24 : h2 ? 22 : h3 ? 18: h4? 16 : h5 ? 14 : h6 ? 12 : fontSize ? fontSize : 14,
                fontWeight: h1 ? '900' : h2 ? '700': h3? '600' : h4 ? '500' : FW ? FW : 'normal',
                color: color,
                textAlign: align,
                marginTop: mt,
                marginBottom: mb,
                margin: m,
                marginLeft: ml,
                margingRight: mr,
            }}
            numberOfLines={numberOfLine} 
        >
            {children}
        </Text>
    )
}

export default CText
