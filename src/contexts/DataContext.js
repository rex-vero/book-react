import { createContext, useState } from "react";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [booked, setBooked] = useState([]);
    const [input, setInput] = useState('');
    const change = (e) => setInput(e.target.value);
    return <DataContext.Provider value={{ input, setInput, change, booked, setBooked }}>{children}</DataContext.Provider>
}

export default DataContext;