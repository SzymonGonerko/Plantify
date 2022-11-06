import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

import AntDesign from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export const SquareButton = ({reset, onPress, styleContainer, styleButton, onPressThemeBar, type, onLogin}) => {

const onPressButtonHandler = () => {
    if (onPress !== undefined) {
        onPress()
        if (reset) reset()
    }
    
    if (onPressThemeBar !== undefined) {
        onPressThemeBar()
    }
    if (onLogin) {
        NavigationBar.setBackgroundColorAsync('transparent')
    }
    
}

    return <>
    <View style={[styles.buttonOuterContainer, styleContainer]}>
        <Pressable 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed, styleButton] : [styles.buttonInnerContainer, styleButton]}
        onPress={onPressButtonHandler} android_ripple={{color: "#9BA9BC"}}>
           {type === "arrow" ? <AntDesign name='left' style={{color: "black", fontSize: 25}}/> : null}
           {type === "nav" ? <EvilIcons name='navicon' style={{color: "#54795E", fontSize: 25}}/> : null}
           {type === "add" ? <Entypo name='plus' style={{color: "#54795E", fontSize: 20}}/> : null}
           {type === "slider" ? <FontAwesome name='sliders' style={{color: "#54795E", fontSize: 23}}/> : null}

        </Pressable>
    </View>
    </>
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 8,
        overflow: "hidden",
        width: 48,
        height: 48
    },
    buttonInnerContainer: {
        backgroundColor: "#c6cdd3",
        flex: 1,
        paddingRight: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    },
    pressed: {
        opacity: 0.75,
    }
})