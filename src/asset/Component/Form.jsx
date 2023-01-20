import React from "react";




export default function Form({ inputVal, setInputVal, dataStore, setDataStore, dropDownChange, setDropDownChange }) {
    const Change = (e) => {
        setInputVal(e.target.value)
    }
    const Add = (e) => {
        e.preventDefault()
        if(inputVal===""){
            alert("please fill the form")
        }else{
            setDataStore([
                ...dataStore, { id: Date.now(), text: inputVal, completed: false }
            ])
        }

    }



    const MenuDropDown = (e) => {
        setDropDownChange(e.target.value)

    }

    return (
        <form className="col-7 d-flex mt-5 form">
            <div className="col-6 d-flex mx-4">
                <input placeholder="write s.th" className="w-100" type="text" onChange={Change} value={inputVal} />
                <button className="mx-3" onClick={Add}>Add</button>
            </div>

            <div className="col-6">
                <select onChange={MenuDropDown}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="unCompleted">unCompleted</option>
                </select>
            </div>
        </form>
    )
}