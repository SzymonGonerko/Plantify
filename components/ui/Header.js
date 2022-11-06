import { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { SquareButton } from './SquareButton';
import { NavBar } from '../NavBar';

export const Header = ({children, onPressShowMainApp, onPressThemeBar}) => {
    const [navVisibility, setNavVisiliblity] = useState(false)

    const goBack = () => {
        onPressThemeBar()
        onPressShowMainApp()
        return null
    }
    
    const showMenu = () => {
        setNavVisiliblity(prev => !prev)
    }
    


    return <>
            <View style={styles.headerContainer}>
                <View>
                    <SquareButton type={"arrow"} onPress={goBack} styleButton={{backgroundColor: "white"}}/>
                </View>
                <View> 
                    <Text style={[styles.headerText, {transform: [{translateY: -3}]}]}>{children}</Text>
                </View>
                <View>
                    <SquareButton type={"nav"} onPress={showMenu} styleContainer={{borderWidth: 1, borderColor: "#54795E"}} styleButton={{backgroundColor: "white"}}/>
                </View>
            </View>
            <NavBar isVisible={navVisibility} />
    </>
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingTop: 50,
        paddingBottom: 20,
        justifyContent: "space-around",
        alignItems: "center"
    },
    headerText: {
        fontSize: 26,
        fontFamily: "PlayfairDisplayBold"
    }

})