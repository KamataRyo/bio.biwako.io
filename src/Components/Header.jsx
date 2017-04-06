// @flow
import React from 'react'

/**
 * Application container Component
 * @param  {{title:string}} props is given props
 * @return {ReactElement} say hello
 */
export default (props: { title: string }): React$Element<> => {

  // parse const
  const { title } = props

  return (
    <header className={ 'header' } id={ 'header' }>
      <h1>{ title }</h1>
    </header>
  )
}
