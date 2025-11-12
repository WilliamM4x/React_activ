type VARIANT_STYLE = "PRIMARY" | "SECONDARY" | "DEFAULT";

export interface ButtonCustomProps{
    title: string;
    variant?: VARIANT_STYLE;
}