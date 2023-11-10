import React, { FC } from 'react'
import { UseFetchDemo } from './demos/useFetchDemo/useFetchDemo'
import { UseLocalStorageDemo } from './demos/useLocalStorageDemo/useLocalStorageDemo'
import { UseHoverDemo } from './demos/useHoverDemo/useHoverDemo'
import { UseViewportSizeDemo } from './demos/useViewportSizeDemo/useViewportSizeDemo'
import { UseWindowScrollDemo } from './demos/useWindowScrollDemo/useWindowScrollDemo'
import { UseToggleDemo } from './demos/useToggleDemo/useToggleDemo'

export const App: FC = () => {

  return <>
    <UseFetchDemo />
    <hr />
    <UseLocalStorageDemo />
    <hr />
    <UseHoverDemo />
    <hr />
    <UseViewportSizeDemo />
    <hr />
    <UseWindowScrollDemo />
    <hr />
    <UseToggleDemo />
  </>
}