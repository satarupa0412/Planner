import { StyleSheet } from 'react-native';

export const modalComponent = StyleSheet.create({
  modalItem: {
    padding: 10,
    backgroundColor: '#5a9e5955',
    borderRadius: 10,
    margin: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  modalStyle: {
    backgroundColor: 'red',
    margin: 10
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    marginTop: 30,
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  title: {
    fontSize: 20,
    backgroundColor: '#5a9e5955',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
})

export const styles = StyleSheet.create({
  roundButton1: {
    width: 70,
    height: 70,
    elevation: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    bottom: 0,
    right: 0,
    margin: 16,
    position: "absolute",
    borderRadius: 100,
    backgroundColor: '#99ccff',
  }
})