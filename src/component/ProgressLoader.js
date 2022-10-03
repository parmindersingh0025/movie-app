import React from 'react';
import Modal from 'react-native-modal';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
const ProgressLoader = ({ isVisible }) => {
    return (
        <Modal deviceHeight={'100%'} isVisible={isVisible}>
            <View style={styles.loaderCenterContainer}>
                <ActivityIndicator size="large" color={"#999999"} />
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    loaderCenterContainer: {
        flex: 1,
        justifyContent: 'center',
        flexGrow: 1,
        alignItems: 'center',
    },
})
export { ProgressLoader };