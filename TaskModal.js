import { View, Modal, Text } from "react-native";
import React from "react";
import { modalComponent } from "./Styles";

export default function TaskModal() {
    return (
        <View>
            <Modal
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setShow(false);
        }}>
          <View style={{backgroundColor:"#000000aa", flex:1}}>
          <View style={{backgroundColor:"#e2e396", marginTop:400,marginLeft:50,marginRight:50,padding: 40, borderRadius:10}}>
            <Text style = {modalComponent.modalItem} onPress={() => {setModalOption("work"); setShow(false)}}>Wofhjkdjfrk</Text>
            <Text style = {modalComponent.modalItem} onPress={() => {setModalOption("study"); setShow(false)}}>jsdksd</Text>            
          </View>
          </View>
        </Modal>
        </View>
    )
}