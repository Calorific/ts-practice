import React, { FC } from 'react'
import { UseFetchDemo } from './demos/useFetchDemo/useFetchDemo'
import { UseLocalStorageDemo } from './demos/useLocalStorageDemo/useLocalStorageDemo'
import { UseHoverDemo } from './demos/useHoverDemo/useHoverDemo'
import { UseViewportSizeDemo } from './demos/useViewportSizeDemo/useViewportSizeDemo'

export const App: FC = () => {

  return <>
    <UseFetchDemo />
    <hr />
    <UseLocalStorageDemo />
    <hr />
    <UseHoverDemo />
    <hr />
    <UseViewportSizeDemo />
  </>
}