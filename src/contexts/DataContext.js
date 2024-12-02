import { createContext, useState } from "react";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [booked, setBooked] = useState([
        { id: 1, bookName: 'example1', count: 20, description: 'blablabalaalal', borrowers: [], available: 20, borrowed: 0 },
        { id: 2, bookName: 'example2', count: 3, description: 'irgfgfgje', borrowers: [], available: 3, borrowed: 0 },
        { id: 3, bookName: 'example3', count: 12, description: 'lhlhhllhhl', borrowers: [], available: 12, borrowed: 0 },
        { id: 4, bookName: 'example4', count: 5, description: 'iodghge b', borrowers: [], available: 5, borrowed: 0 },
    ]);
    const [input, setInput] = useState('');
    const change = (e) => setInput(e.target.value);
    return <DataContext.Provider value={{ input, setInput, change, booked, setBooked }}>{children}</DataContext.Provider>
}

export default DataContext;