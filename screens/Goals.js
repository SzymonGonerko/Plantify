import React from "react";
import { StyleSheet, View } from 'react-native';
import { Header } from "../components/ui/Header"
import { GoalsNavigator } from '../components/Goals/goalsNavigation/GoalsNavigator';


export const Goals = ({onPressShowMainApp, onPressThemeBar}) => {
    return (
        <View style={styles.container}>
            <Header onPressShowMainApp={onPressShowMainApp} onPressThemeBar={onPressThemeBar}>
                Moje Zadania
            </Header>
            
            <GoalsNavigator/>
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})