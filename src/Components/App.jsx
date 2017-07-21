// @flow
import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

/**
 * Application container Component
 * @param  {{meta: meta, data: data}} props is given props
 * @return {ReactElement} say hello
 */
export default (props: { meta: Meta, data: Data }): React$Element<> => {

  // parse const
  const { title } = props.meta

  return (
    <main className={ 'main' } id={ 'main' }>
      <Header title={ title } />
      <Footer title={ title } />
    </main>
  )

}
