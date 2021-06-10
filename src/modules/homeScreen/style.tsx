import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themeRed,
    opacity: 0.8,
  },
  introStyle: {
    color: colors.themeBlack,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
