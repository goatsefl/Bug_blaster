import React, { useState } from "react";
import '../styles.css'


export default function TicketForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('1')

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }
    const clearForm = () => {
        setTitle('')
        setDescription('')
        setPriority('1')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm()
    }
    return (
        <form className="ticket-form" onSubmit={handleSubmit}>
            <div>
                <label>
                    Title
                </label>
                <input type="text" value={title} className="form-input" onChange={e => setTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <textarea type="text" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                <input type="radio"></input>
            </div>
            <fieldset className="priority-fieldset">
                <legend>Priority</legend>
                {
                    Object.entries(priorityLabels).map(([value, label]) => (
                        <label className="priority-label" key={value}>
                            <input type="radio" value={value} checked={priority == value} onChange={(e) => setPriority(e.target.value)}></input>
                            {label}
                        </label>
                    ))
                }
            </fieldset>
            <button type="submit" className="button">Submit</button>
        </form >
    );
}