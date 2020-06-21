import { useReducer } from 'react'

function useForm(initialState) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_FIELD':
        return {
          ...state,
          [action.fieldName]: action.value,
        }
      case 'RESET_FIELDS':
        return initialState
      default:
        throw new Error('wrong action type')
    }
  }
  const [formData, dispatch] = useReducer(reducer, initialState)

  const changeField = (fieldName, value) => {
    dispatch({ type: 'CHANGE_FIELD', fieldName, value })
  }

  const resetFields = () => {
    dispatch({ type: 'RESET_FIELDS' })
  }

  return {
    formData,
    changeField,
    resetFields,
  }
}

export default useForm
