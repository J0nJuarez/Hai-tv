import { Dimensions } from 'react-native';

export function vw(percentageWidth) {
  const width = Dimensions.get('window').width;
  return (percentageWidth * width) / 100;
}

export function vh(percentageHeight) {
  const height = Dimensions.get('window').height;
  return (percentageHeight * height) / 100;
}
