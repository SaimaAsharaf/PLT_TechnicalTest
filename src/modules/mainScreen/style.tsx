import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.themeWhite,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themeRed,
    minHeight: 50,
    padding: 10,
    flexDirection: 'row',
    margin: 16,
    borderRadius: 8,
    width: screenWidth - 16,
  },
  greeting: {
    color: colors.themeBlack,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 16,
  },
});
