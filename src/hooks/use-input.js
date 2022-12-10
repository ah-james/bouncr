import { useState } from "react";

const useInput = (validateValue) => {
    const [value, setValue] = useState('')
    const [touchedValue, setTouchedValue] = useState(false)

    const validValue = validateValue(value)
    const hasError = !validValue && touchedValue

    const handleValueChange = event => {
        setValue(event.target.value)
    }

    const handleValueBlur = () => {
        setTouchedValue(true)
    }

    const reset = () => {
        setValue('')
        setTouchedValue(false)
    }

    return {
        value,
        validValue,
        hasError,
        handleValueBlur,
        handleValueChange,
        reset
    }
}

export default useInput