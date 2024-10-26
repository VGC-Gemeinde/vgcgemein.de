export const addOpacity = (opacity: string, color: string): string => {
    const r = Number(`0x${color.slice(1, 3)}`);
    const g = Number(`0x${color.slice(3, 5)}`);
    const b = Number(`0x${color.slice(5)}`);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}