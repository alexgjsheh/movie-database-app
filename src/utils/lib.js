// function to dynamically generate year
export const getDate = () => {
    const date = new Date();
    return date.getFullYear();
};

export const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} h ${minutes} min`;
};
