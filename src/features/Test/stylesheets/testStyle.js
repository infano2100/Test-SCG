import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Platform.OS === 'ios' ? 0 : 20,
  },
  ScrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginTop20: {
    marginTop: 20,
  },
  marginBottom50: {
    marginBottom: 50,
  },
})

export default styles
