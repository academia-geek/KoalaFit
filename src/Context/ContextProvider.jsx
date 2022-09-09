import React, { createContext, useState } from 'react'

const Context = createContext();

const ContextProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [id, setId] = useState(null)
    const [blockProgress, setBlockProgress] = useState(false)
    const [calCounter, setCalCounter] = useState(0)
    const [aux, setAux] = useState(false)
    const [caloriesBurned, setCaloriesBurned] = useState()
    
    const handleModal = () => {
        setShowModal(!showModal);
    };


    const handleModal2 = () => {
        setShowModal2(!showModal2);
    };

    const showDrawer = () => {
      setShowModal(!showModal)
    }

    const data = {
        showModal,
        handleModal,
        showModal2,
        handleModal2,
        showDrawer,
        id,
        setId,
        calCounter,
        setCalCounter,
        setBlockProgress,
        blockProgress,
        aux, 
        setAux,
        caloriesBurned, 
        setCaloriesBurned
    }


    return <Context.Provider value={data}>{children}</Context.Provider>;
  
}

export { ContextProvider, Context };