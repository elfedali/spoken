import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../shared'

const OnBoardingScreen = ({
    navigation
}) => {
    return (
        <SafeAreaView>
            <View>
                <Text
                    style={styles.text}
                >OnBoardingScreen</Text>
                <Button title="Home"
                    onPress={() => navigation.navigate('HomeScreen')}
                />
            </View>
        </SafeAreaView>
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        //fontFamily: theme.fonts.regular,
    }
})