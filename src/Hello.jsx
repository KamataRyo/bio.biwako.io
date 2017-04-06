// @flow

import React from 'react'

/**
 * [props description]
 * @param  {{name:string}} props is given props
 * @return {ReactElement} say hello
 */
export default (props: { name: string }): React$Element<> => {
  const { name } = props
  return <p>{ `Hello, ${name}` }</p>
}
