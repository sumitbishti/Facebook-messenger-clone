import React from 'react'
import SendIcon from '@material-ui/icons/Send'

const InputArea = ({ handleSubmit, setFormValue, formValue }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    value={formValue}
                    autoFocus={true}
                    onChange={(e) => setFormValue(e.target.value)}
                ></input>
                <button
                    disabled={!formValue}
                    type='submit'
                    color='primary'
                >
                    <SendIcon />
                </button>
            </form>
        </div>
    )
}

export default InputArea
