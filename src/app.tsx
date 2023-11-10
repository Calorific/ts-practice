import React, { FC } from 'react'
import { UseFetchDemo } from './demos/useFetchDemo/useFetchDemo'
import { UseLocalStorageDemo } from './demos/useLocalStorageDemo/useLocalStorageDemo'

export const App: FC = () => {

  return <>
    <UseFetchDemo />
    <hr />
    <UseLocalStorageDemo />
  </>
}