import React from "react";
import TodoItems from "./TodoItems";


export default function TodoContainer({ dataStore, setDataStore , dataStoreClone}) {
    return (
        <section className="TodoContainer-items col-4">
            {
                dataStoreClone.map(self => (
                    <TodoItems
                        text={self.text}
                        id={self.id}
                        complete={self.completed}
                        key={self.id}
                        dataStore={dataStore}
                        setDataStore={setDataStore}
                        self={self}
                    />

                ))
            }
        </section>
    )
}