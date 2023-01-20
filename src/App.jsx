import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "./asset/Component/Form";
import TodoContainer from "./asset/Component/TodoContainer";
import Title from "./asset/Component/Title";

export default function App() {
    const [inputVal, setInputVal] = useState("")
    const [dataStore, setDataStore] = useState([])
    const [dropDownChange, setDropDownChange] = useState("")
    const [dataStoreClone, setDataStoreClone] = useState([])



    useEffect(() => {
        const getLocalTodos = () => {
            if(localStorage.getItem("flag")===null){
                localStorage.setItem("flag" , JSON.stringify([]))
            }else{
                setDataStore(
                    JSON.parse(localStorage.getItem("flag"))
                )
            }
        }
        getLocalTodos()
    }, [])



    useEffect(() => {
        const filterHandler = () => {
            switch (dropDownChange) {
                case "Completed": setDataStoreClone(dataStore.filter(items => items.completed === true)); break;
                case "unCompleted": setDataStoreClone(dataStore.filter(items => items.completed === false)); break;
                default: setDataStoreClone(dataStore)
            }
        }

        const SaveLocalTodos = () => {
            localStorage.setItem("flag" , JSON.stringify(dataStore))
        }

        filterHandler()
        SaveLocalTodos()
    }, [dropDownChange, dataStore])





    return (
        <>
            <div className="col-12">
                <div className="container-xxl d-flex justify-content-center flex-wrap">
                    <Title/>    
                    <Form
                        inputVal={inputVal}
                        setInputVal={setInputVal}
                        dataStore={dataStore}
                        setDataStore={setDataStore}
                        dropDownChange={dropDownChange}
                        setDropDownChange={setDropDownChange} />
                </div>
            </div>

            <div className="col-12">
                <div className="container-xxl d-flex justify-content-center">
                    <TodoContainer
                        dataStore={dataStore}
                        setDataStore={setDataStore}
                        dataStoreClone={dataStoreClone}
                    />
                </div>
            </div>
        </>
    )
}