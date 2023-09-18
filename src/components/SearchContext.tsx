import { ReactNode, createContext, useState } from 'react';

interface SearchContextProps { searchTerm: string; setSearchTerm: (term: string) => void; }
interface Children { children: ReactNode }

export const SearchContext = createContext<SearchContextProps>({
    searchTerm: '', setSearchTerm: () => { }
})

export const SearchProvider = ({ children }: Children) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>{children}</SearchContext.Provider>
    )
};