import React from 'react';
import { StyleSheet, Text, Button, DrawerLayoutAndroid, TouchableOpacity, View, Modal } from 'react-native';
import { modalComponent, styles } from './Styles';

export default function Title() {
    return (
        <View style={modalComponent.title}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Planner</Text>
        </View>
    );
}