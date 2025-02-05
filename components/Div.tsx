import { View, Text, ImageBackground } from 'react-native'
import React, { Children } from 'react'

interface IDivProps {
    width?: number | string,
    height?: number | string,
    m?: number | undefined,
    mt?: number | undefined,
    mb?: number | undefined,
    mr?: number | undefined,
    ml?: number | undefined,
    align?: string,
    bg?: string,
    bgImage?: 'center' | 'baseline'| 'flex-start' | 'flex-end' | 'stretch',
    bgImageSourch?: any,
    children?:any,
    rounded?: number,
    circle?: boolean | true,
    p?:number,
    pt?:number,
    pb?:number,
    px?:number,
    py?:number,
    pr?:number,
    pl?:number,
flex?: string,
items?: 'center' | 'flex-end' | 'flex-start',
}


const Div = (
    {
        width,
        height,
        m,
        mt,
        mb,
        mr,
        ml,
        align,
        bg,
        bgImage, 
        bgImageSourch,
        children,
        rounded,
        circle,
        p,
        pt,
        pb,
        px,
        py,
        pr,
        pl,
        flex, 
        items
    }: IDivProps
) => {
    return (
        <>
            {bgImage ? (
                <ImageBackground source={bgImageSourch ? bgImageSourch : ''} style={{
                    width: width,
                    height: height,
                    margin: m,
                    marginTop: mt,
                    marginBottom: mb,
                    marginRight: mr,
                    marginLeft: ml,
                    alignSelf: align,
                    backgroundColor: bg,
                    borderRadius: circle ? Number(height) / 2 : rounded && rounded,
                }}>
                    {children} {/* Render children here */}
                </ImageBackground>
            ) : (
                <View style={{
                    width: width,
                    height: height,
                    margin: m,
                    marginTop: mt,
                    marginBottom: mb,
                    marginRight: mr,
                    marginLeft: ml,
                    alignSelf: align,
                    backgroundColor: bg,
                    borderRadius: circle ? Number(height) / 2 : rounded && rounded,
                    padding: p,
                    paddingTop: pt,
                    paddingBottom: pb,
                    paddingRight: pr,
                    paddingLeft: pl,
                    paddingHorizontal: px,
                    paddingVertical: py,
                    flexDirection: flex && 'row',
                    alignItems: items
                }}>
                    {children}
                </View>
            )}
        </>
    )
}


export default Div