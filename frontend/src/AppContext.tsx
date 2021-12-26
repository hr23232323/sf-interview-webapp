import React from 'react';
import { useApi } from './hooks/useApi'

const AppContext = React.createContext()

export const ContextProvider = ({children}) =>{
    const [isOpen, setIsOpen] = React.useState(false);
    const [rawData, setRawData] = React.useState([]);
    const { isLoading, serverError, apiData } = useApi({
            method : "GET", 
            url : "URL", 
            body : "BODY"
        })

    React.useEffect(() => {
        setRawData(apiData)

    }, [apiData])

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return(
        <AppContext.Provider value={{isOpen, toggleSidebar, rawData}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
