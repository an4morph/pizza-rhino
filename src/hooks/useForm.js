import { useReducer } from 'react'
import { validate } from '../services/validation'

function getValidation(values, rules) {
  const validationObj = {}
  Object.keys(values).forEach((field) => {
    const error = validate(values[field], rules && rules[field])
    validationObj[field] = error
  })
  const isValid = !Object.values(validationObj).some((v) => !!v)
  return [validationObj, isValid]
}

function useForm(initialState, _validationRules) {
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

  const validationRules = typeof _validationRules === 'function' ? _validationRules(formData) : _validationRules

  const [validation, isValid] = getValidation(formData, validationRules)

  return {
    formData,
    changeField,
    resetFields,
    validation,
    isValid,
  }
}

export default useForm
