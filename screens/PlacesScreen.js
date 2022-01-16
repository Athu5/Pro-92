import React from "react";
import 
{View, SafeAreaView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

const PlacesScreen = (props)=>{
    return(
        <SafeAreaView style = {{
            flex:1,
            paddingHorizontal:20,
            backgroundColor:"white",
        }}>
            <View style = {styles.header} >
                <Text>
                    PlacesScreen
                </Text>
            </View>
        </SafeAreaView>
    )
} 
const styles = StyleSheet.create({
    
header: {marginTop: 30,
         flexDirection: "row", 
         justifyContent: "space-between" },
})

export default PlacesScreen ;