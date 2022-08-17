import { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {
    const s1 = {
        "name" : "Mohammed",
        "class" : "VII Sem"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name" : "Mohammed Huzefa",
                "class" : "VIII Sem"
            })
        }, 5000);
    }

    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;