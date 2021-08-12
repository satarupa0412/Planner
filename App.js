import React, { useState, useRef } from 'react';
import { StyleSheet, Text, Button, DrawerLayoutAndroid, TouchableOpacity, View, Modal } from 'react-native';
import { modalComponent, styles } from './Styles';
import TaskModal2 from './TaskModal2';
import TaskModal3 from './TaskModal3';
import { firebase } from 'firebase/app';
import Title from './Title';
import FirebaseUtil from './FirebaseUtil';

export default function App() {
  const drawer = useRef(null);
  const [show, setShow] = useState(false)
  const [modalOption, setModalOption] = useState("")
  const [workModal, setWorkModal] = useState(false)
  const [studyModal, setStudyModal] = useState(false)

  const navigationView = () => (
    <View style={{ marginTop: 30, backgroundColor: '#f0332a', flex: 1 }}>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <Text style={modalComponent.paragraph} onPress={() => { setWorkModal(true); drawer.current.closeDrawer(); }}>Work</Text>
      <Text style={modalComponent.paragraph} onPress={() => { setStudyModal(true); drawer.current.closeDrawer(); }}>Study</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <View style={{ flex: 1, marginTop: 30, backgroundColor: "#ffb3b3" }}>
        <Title />

        <TouchableOpacity
          onPress={() => { setShow(true) }}
          style={styles.roundButton1}>
          <Text style={{ fontSize: 50 }}>+</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={show}
          onRequestClose={() => {
            setShow(false);
          }}>
          <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
            <View style={{ backgroundColor: "#e2e396", marginTop: 400, marginLeft: 50, marginRight: 50, padding: 40, borderRadius: 10 }}>
              <Text style={modalComponent.modalItem} onPress={() => { setModalOption("work"); setShow(false); setWorkModal(true); setStudyModal(false); }}>Work</Text>
              <Text style={modalComponent.modalItem} onPress={() => { setModalOption("study"); setShow(false); setStudyModal(true); setWorkModal(false); }}>Study</Text>
            </View>
          </View>
        </Modal>

        {workModal && <TaskModal2 />}
        {studyModal && <TaskModal3 />}
      </View>
    </DrawerLayoutAndroid>
  )
}

