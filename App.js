import React, { useState } from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Modal } from 'react-native';
import DrawerComponent from './DrawerComponent';
import FirebaseUtil from './FirebaseUtil';
import { modalComponent, styles } from './Styles';
import TaskModal from './TaskModal';
import TaskModal2 from './TaskModal2';
import  {firebase}  from 'firebase/app';

export default function App() {
  const [show, setShow] = useState(false)
  const [modalOption, setModalOption] = useState("No value")
  const [workModal, setWorkModal] = useState(false)

    return(
      <View style= {{flex: 1, marginTop: 30, backgroundColor: "#ffb3b3", padding:10}}>
        <Text style = {{fontSize: 20}} onPress= {() => {}}>Planner</Text>
        
        <TouchableOpacity
        onPress={() => {setShow(true)}}
        style={styles.roundButton1}>
        <Text style={{fontSize:50}}>+</Text>
      </TouchableOpacity>
    <Text>{modalOption}</Text>
        <Modal
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
          <View style={{backgroundColor:"#000000aa", flex:1}}>
          <View style={{backgroundColor:"#e2e396", marginTop:400,marginLeft:50,marginRight:50,padding: 40, borderRadius:10}}>
            <Text style = {modalComponent.modalItem} onPress={() => {setModalOption("work"); setShow(false); setWorkModal(true);}}>Work</Text>
            <Text style = {modalComponent.modalItem} onPress={() => {setModalOption("study"); setShow(false)}}>Study</Text>            
          </View>
          </View>
        </Modal>
        
        {workModal && <TaskModal2/>}
      </View>
    )
  }

