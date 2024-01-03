import React from "react";
import { StyleSheet, Text, View} from "react-native";

const Header = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.red}>just red</Text>
        </View>

    );
};
const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
});
export default Header;