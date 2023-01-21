export const getItem = (key) => {
    const originData = localStorage.getItem(key);
    return JSON.parse(originData);
};


