import React, { useState } from 'react'

const TodoComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)

    function saveTodo(e){
        e.preventDefault()

        const todo = {title, description, completed}
        console.log(todo);
    }


  return (
    <div className='container'>
        <br/>  <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Todo</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                        <label className='form-label'>Todo Title:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Todo Title'
                                name='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                        <label className='form-label'>Todo Description:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Todo Description'
                                name='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                        <label className='form-label'>Todo Completed:</label>
                            <select
                                className='form-control'
                                value={completed}
                                onChange={(e) => setCompleted(e.target.value)}
                                >
                                    <option value='false'>No</option>
                                    <option value='true'>Yes</option>
                            </select>
                        </div>

                        <button className='btn btn-success' onClick={(e) => saveTodo(e)}>Submit</button>
                           
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TodoComponent