import React, { createContext, useState, useContext } from "react";

const SearchHistoryContext = createContext();

export default function SearchHistoryProvider({ children }) {
  const [history, setHistory] = useState([]);

  return (
    <SearchHistoryContext.Provider value={{ history, setHistory }}>
      { children }
    </SearchHistoryContext.Provider>
  );
}

export function useSearchHistory() {
  const context = useContext(SearchHistoryContext);

  if (!context) throw new Error("useCount must be used within a useSearchHistory");

  const { history, setHistory } = context;

  return { history, setHistory };
}