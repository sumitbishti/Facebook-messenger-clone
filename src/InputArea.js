import React from 'react'
import { Button, Input, InputLabel } from '@material-ui/core'
import { FormControl, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const InputArea = ({ handleSubmit, setMessage, message }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <FormControl className='form-control'>
                    <InputLabel >Say hello...</InputLabel>
                    <Input
                        value={message.text}
                        autoFocus={true}
                        onChange={(e) => setMessage({ ...message, text: e.target.value })}
                    />
                </FormControl>
                <IconButton className='icon-button' disabled={!message.text} type='submit' color='primary'>
                    <SendIcon/>
                </IconButton>
            </form>
        </div>
    )
}

export default InputArea
