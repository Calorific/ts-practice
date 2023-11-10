import React, { FC } from 'react'
import { UseFetchDemo } from './demos/useFetchDemo/useFetchDemo'
import { UseLocalStorageDemo } from './demos/useLocalStorageDemo/useLocalStorageDemo'
import { UseHoverDemo } from './demos/useHoverDemo/useHoverDemo'

export const App: FC = () => {

  return <>
    <UseFetchDemo />
    <hr />
    <UseLocalStorageDemo />
    <hr />
    <UseHoverDemo />
  </>
}