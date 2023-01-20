import React from "react";


export default function TodoItems({ text, id, complete, self, dataStore, setDataStore }) {
    const Complete = () => {
        setDataStore(
            dataStore.map(item => {
                if (item.id === self.id) {
                    return { ...item, completed: !item.completed }
                } else {
                    return item
                }
            })
        )
    }

    const Del = () => {
        setDataStore(
            dataStore.filter(item => item.id !== self.id)
        )
    }

    return (
        <div className="todo-items d-flex align-items-center my-2">
            <p className={`m-0 ${complete ? "completed" : ""}`}>{text}</p>
            <button onClick={Complete} className="mx-3">complete</button>
            <button onClick={Del}>delete</button>
        </div>
    )
}