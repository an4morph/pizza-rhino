import React, { useEffect } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import PageTemplate from '../../components/PageTemplate'
import TopMenu from '../../components/TopMenu'
import Catalog from '../../components/Catalog'
import { getCatalog } from '../../store/actions/catalog'

const DEFAULT_CATEGORY = 'pizza'

const StyledTopMenu = styled(TopMenu)`
  margin-bottom: 24px;
`

function HomePage({ location }) {
  const dispatch = useDispatch()
  const catalog = useSelector((state) => state.catalog)
  const category = location.hash.substr(1) || DEFAULT_CATEGORY

  useEffect(() => {
    dispatch(getCatalog(category))
  }, [category, dispatch])

  return (
    <PageTemplate>
      <StyledTopMenu category={category} />
      <Catalog items={catalog[category]} />
    </PageTemplate>
  )
}

HomePage.propTypes = {
  location: object.isRequired,
}

export default HomePage
