import { useState, useEffect } from 'react'

function useForm (callback, defaults) {

  const [input, setInput] = useState(defaults)
  useEffect(() => {
    setInput({ ...defaults })
  }, [])
  const handleInputChange = (event) => {
    const { name, type } = event.target
    let value = event.target.value
    type == "number" ? value=parseInt(value): value
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }
  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
