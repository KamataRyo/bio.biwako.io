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
    <footer className={ 'footer' } id={ 'footer' }>
      { `${title}は琵琶湖のいきものを紹介するサイトです。` }
    </footer>
  )
}
