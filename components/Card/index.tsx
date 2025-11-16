import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';
import { Card, CardContainer } from './styles';
import { CardProps } from './types';

export default function CardCustom(
    {
    title, 
    latitude,
    longitude,
    onClickCard,
    icon,
    }:CardProps){
    return(<Card 
    style={{
        gap: 100,
        elevation: 5
        }}
        onPress={onClickCard}
        >
        <CardContainer>
           <Text>{title}</Text>
           <Text>{latitude}</Text>
           <Text>{longitude}</Text>
        </CardContainer>

        {icon && (
            <Pressable onPress={icon.onClickIcon}>
                <MaterialIcons 
                    name={icon.name} 
                    size={24} 
                    color={icon.color || '#000'} 
                />
            </Pressable>
        )}

    </Card>);
}