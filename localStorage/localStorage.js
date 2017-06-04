export const loadState = () => {
    try {
        const serializableState = localStorage.getItem('State');
        if(serializableState === null) {
            return undefined;
        }
        return JSON.parse(serializableState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (stateData) => {
  try {
      localStorage.setItem('State', JSON.stringify(stateData));
  } catch(err) {
      console.log("local storage error @ save")
  }
};