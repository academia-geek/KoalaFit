import React, { createContext, useState } from 'react'

const Context = createContext();

const ContextProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [id, setId] = useState(null)
    const [calCounter, setCalCounter] = useState(0)

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
        setCalCounter
    }


    return <Context.Provider value={data}>{children}</Context.Provider>;
  
}

export { ContextProvider, Context };