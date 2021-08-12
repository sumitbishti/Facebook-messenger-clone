import React from 'react'
import { Input, InputLabel } from '@material-ui/core'
import { FormControl, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const InputArea = ({ handleSubmit, setFormValue, formValue }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>

                <input
                    className='form-control'    
                    value={formValue}
                    autoFocus={true}
                    onChange={(e) => setFormValue(e.target.value)}
                ></input>
                {/* <FormControl className='form-control'>
                    <InputLabel >Say hello...</InputLabel>
                    <Input
                        value={formValue}
                        autoFocus={true}
                        onChange={(e) => setFormValue(e.target.value)}
                    />
                </FormControl> */}

                <IconButton
                    className='icon-button'
                    disabled={!formValue}
                    type='submit'
                    color='primary'
                >
                    <SendIcon />
                </IconButton>

            </form>

        </div>
    )
}

export default InputArea
