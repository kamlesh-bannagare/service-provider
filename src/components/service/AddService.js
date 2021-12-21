import './AddService.css';
import { useState } from 'react';

const AddService = (props) => {
    const initialState = {
        title: "first Title",
        ammount: 111,
        description: "this is my first description",
    }
    const [form, setForm] = useState(initialState)
    const titleChangeHandler = (event) => {
        setForm((previous) => {
            return { ...previous, title: event.target.value }
        })
    }
    const ammountChangeHandler = (event) => {
        setForm((previous) => {
            return { ...previous, ammount: event.target.value }
        })
    }
    const descriptionChangeHandler = (event) => {
        setForm((previous) => {
            return { ...previous, description: event.target.value }
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
       props.getData(form)
       setForm({title:"",ammount:"",description:"",})
       
    }
    return (
        <>
            <form onSubmit={submitHandler} >
                <label>Title</label>
                <input value={form.title} type="text" onChange={titleChangeHandler} />
                <label>Ammount</label>
                <input value={form.ammount} type="number" onChange={ammountChangeHandler} />
                <label>Description</label>
                <input value={form.description} type="text" onChange={descriptionChangeHandler} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default AddService;