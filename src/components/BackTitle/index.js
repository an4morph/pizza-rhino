import React from 'react'
import { string, object } from 'prop-types'
import styled from 'styled-components'
import IconButton from '../IconButton'
import Typography from '../Typography'
import ArrowBack from '../Icons/ArrowBack'

const Container = styled.div`
  display: flex;
`
const Text = styled.div`
  margin-left: 20px;
`
const StyledTitle = styled(Typography)`
  line-height: 20px;
`

function BackTitle({ title, subtitle, history }) {
  return (
    <Container>
      <IconButton
        onClick={() => history.goBack()}
        icon={<ArrowBack />}
      />
      <Text>
        <StyledTitle tag="h1">{title}</StyledTitle>
        <Typography tag="h3">{subtitle}</Typography>
      </Text>
    </Container>
  )
}

BackTitle.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  history: object.isRequired,
}

export default BackTitle
