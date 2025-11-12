import { ComponentProps } from "react";
import {MaterialIcons} from "@expo/vector-icons"

export interface CardProps {
    title: string;
    latitude: string;
    longitude: string;
    onClickCard: () => void;
    icon?: {
        name: ComponentProps <typeof MaterialIcons>['name'],
        onClickIcon: () => void,
        color?: string
    }
}