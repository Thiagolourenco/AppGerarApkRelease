import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderColor: '#000',
    paddingLeft: 5,
    marginTop: 10,
  },

  btn: {
    height: 50,
    width: '89%',
    borderRadius: 15,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  btnSignUp: {
    height: 50,
    width: '89%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnTextSignUp: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
