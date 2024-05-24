import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetailsScreen() {
  const navigation = useNavigation();

  return (
    <Button
      title="Go to MyScreen"
      onPress={() => navigation.navigate('My')}
    />
  );
}