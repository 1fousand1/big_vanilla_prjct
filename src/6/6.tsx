import React, {MouseEvent, ChangeEvent} from "react";

/*const callback = (): number => {
    alert('hey')
    return 12;
}
window.setTimeout(callback, 1000)*/

export function User(){
    
     const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
         event.button
         alert('user have been deleted ')
     }
     const saveUser = () => {
         alert('user have been saved')
     }

     const nameChanged= () => {
         console.log('name changed')
     }
     const onAgeChanges = (event: ChangeEvent<HTMLInputElement>) => {
         console.log('age  changed:' + event.currentTarget.value)
     }

    return (
        <div>
            <textarea onChange={nameChanged}>Dimych</textarea>
            <input onChange={onAgeChanges}/>
            <button name="delete" onClick={deleteUser}>
                delete
            </button>
            <button name="save" onClick={saveUser}>
                save
            </button>
        </div>
    )
}