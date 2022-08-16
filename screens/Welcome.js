import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert } from 'react-native';
import { Button } from '../components/ui/Button';
import { Separator } from '../components/ui/Separator';
import { TextInfo } from '../components/TextInfo';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height + 200;

export const Welcome = () => {

    const onPressHandler = () => {
        Alert.alert("Pracuję nad tym", "aplikacja jest w fazie testowej. Kliknij zaloguj się", [{text: "okey", style: "default"}])
    }


    return <>
    <View style={styles.container}>
        <View style={styles.bgcContainer}>
            <View style={styles.bgcFilter}/>
            <ImageBackground
            source={require("../assets/images/background.jpg")} 
            resizeMode="cover"
            style={styles.background}
            />
        </View>
        <View style={styles.contentContainer}>
            <View style={styles.welcomeText}>
                <Text style={styles.text}>Witaj</Text>
                <Text style={styles.text}>w Plantify</Text>
            </View>
            <View style={styles.btnsContainer}>
                <Button styleContainer={{marginHorizontal: 20}}>Zaloguj się</Button>
                <Separator style={{marginTop: 30}}/>
                <Button
                    onPress={onPressHandler}
                    styleContainer={{marginHorizontal: 20, marginTop: 20}} 
                    styleButton={{backgroundColor: "white"}}
                    styleText={{color: "#54795E"}}>
                        Załóż konto
                </Button>
            </View>
            <View style={styles.textContainer}>
                <TextInfo/>
            </View>

        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        zIndex: -1,
        width: windowWidth,
        height: windowHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },
    bgcContainer: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight
    },
    bgcFilter: {
        position: 'absolute',
        zIndex: 2,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#0d0e2480"
    },
    background: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
    },
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        width: windowWidth,
        height: windowHeight,
    },
    welcomeText: {
        position: 'absolute',
        width: "100%",
        top: "38%",
        left: "10%",
        zIndex: 2,
    },
    text: {
        fontSize: 42,
        color: "white",
        lineHeight: 50,
        fontFamily: "PlayfairDisplayBold"
    },
    btnsContainer: {
        position: 'absolute',
        top: "55%",
        left: 0,
        width: "100%",
    },
    textContainer: {
        position: 'absolute',
        bottom: "13%",
        left: 0,
        width: "100%",
    },
})