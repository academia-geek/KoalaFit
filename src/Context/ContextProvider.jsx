import React, { createContext, useState } from 'react'

const Context = createContext();

const ContextProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
      };


    const handleModal2 = () => {
        setShowModal2(!showModal2);
      };

    const data = {
        showModal,
        handleModal,
        showModal2,
        handleModal2,
    }


    return <Context.Provider value={data}>{children}</Context.Provider>;

}

export { ContextProvider, Context };