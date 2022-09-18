import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal} from 'react-native';
import { LongLineSeparator } from './ui/LongLineSeparator';
import Feather from "react-native-vector-icons/Feather"


export const Requirements = ({profile}) => {
   
    return <>
    <View style={{height: "50%"}}>

        <View style={styles.squareContainer}>
            {Object.entries(profile).map(([key, val], i) => {
                return (
                <View key={i} style={{width: 48}}>
                    <View  style={styles.squareIcon}>
                        {key === "insolation" ? <Image style={styles.innerIcon} source={require("../assets/icons/requirementsIcons/sun.png")}/>: null}
                        {key === "temperature" ? <Image style={styles.innerIcon} source={require("../assets/icons/requirementsIcons/temp.png")}/>: null}
                        {key === "position" ? <Image style={styles.innerIcon} source={require("../assets/icons/requirementsIcons/position.png")}/>: null}
                        {key === "whiff" ? <Feather name='wind' style={{fontSize: 20}}/>: null}
                        {key === "humidity" ? <Image style={styles.innerIcon} source={require("../assets/icons/requirementsIcons/humidity.png")}/>: null}
                    </View>
                    <View style={styles.mainLine}>
                        <View style={[styles.currentValueLine, {width: `${val.inPercentage}%`}]}/>
                    </View>
                </View>
                )
            })}
        </View>
        <LongLineSeparator style={{marginTop: 15, marginBottom: 10}}/>
        
        <View style={styles.listContainer}>
            {Object.entries(profile).map(([key, val], i) => {
                return <View key={i} style={styles.itemList}>
                        <View style={styles.iconList}>
                            {key === "insolation" ? <Image style={styles.innerIcon} source={require("../assets/icons/requirementsIcons/sun.png")}/>: null}
                            {key === "temperature" ? <Image style={styles.innerIcon} source={require("../assets/icons/requirementsIcons/temp.png")}/>: null}
                            {key === "position" ? <Image style={styles.innerIcon} source={require("../assets/icons/requirementsIcons/position.png")}/>: null}
                            {key === "whiff" ? <Feather name='wind' style={{fontSize: 20}}/>: null}
                            {key === "humidity" ? <Image style={styles.innerIcon} source={require("../assets/icons/requirementsIcons/humidity.png")}/>: null}
                        </View>
                        <View style={styles.keyItemList}>
                            <Text style={styles.defaultText}>
                                {key === "insolation" ? "Nasłonecznienie": null}
                                {key === "temperature" ? "Temperatura": null}
                                {key === "position" ? "Pozycja względem okna": null}
                                {key === "whiff" ? "Przewiew w pomieszczeniu": null}
                                {key === "humidity" ? "Wilgotność powietrza": null}
                            </Text>
                        </View>

                        <View style={styles.valueItemList}>
                            <Text style={styles.defaultText}>
                                {val.inWords}
                            </Text>
                        </View>

                </View>
            })}

        </View>


    </View>
    
    </>
}

const styles = StyleSheet.create({
    squareContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginTop: 20, 
        marginHorizontal: 10
    },
    squareIcon: {
        width: 48, 
        height: 48, 
        borderRadius: 8, 
        backgroundColor: "white", 
        justifyContent: "center", 
        alignItems: "center"
    },
    innerIcon: {
        width: 21,
        height: 21
    },
    mainLine: {
        position: "relative", 
        width: "100%", 
        height: 4, 
        backgroundColor: "#ECEEF0", 
        borderRadius: 10, 
        marginTop: 9
    },
    defaultText: {
        fontFamily: "NunitoBold",
        fontSize: 16,
        color: "#495566"
    },
    currentValueLine: {
        position: "absolute",
        height: 4, 
        backgroundColor: "#495566", 
        borderRadius: 10
    },
    listContainer: {
        flexDirection: "column", 
        marginHorizontal: 10
    },
    itemList: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginVertical: 5
    },
    iconList: {
        alignItems: "center", 
        justifyContent: "center", 
        width: 25, 
        height: 25
    },
    keyItemList: {
        flexGrow: 2, 
        justifyContent: "center", 
        paddingLeft: 5
    },
    valueItemList: {

    }
})