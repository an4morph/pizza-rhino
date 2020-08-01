import React from 'react'
import { node, string, func, bool } from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import FormError from './Error'

const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.formBg};;
  padding: 23px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
`
const StyledError = styled(FormError)`
  margin-top: 12px;
`
const StyledButton = styled(Button)`
  margin-top: 20px;
`

function Form({ children, onSubmit, buttonText = 'submit',
  submitFailed, submitting, error = 'Unknown error', title,
}) {
  return (
    <StyledForm>
      {title}
      <div>{children}</div>
      {submitFailed && <StyledError error={error} />}
      <StyledButton
        disabled={submitting}
        onClick={onSubmit}
      >
        {buttonText}
      </StyledButton>
    </StyledForm>
  )
}

Form.propTypes = {
  children: node.isRequired,
  onSubmit: func,
  buttonText: string,
  submitFailed: bool,
  submitting: bool,
  error: string,
  title: node,
}

export default Form
