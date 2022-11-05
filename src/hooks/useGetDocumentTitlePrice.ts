import { useEffect } from 'react'
// import { useCakeBusdPrice } from 'hooks/useBUSDPrice'
import { useC4eiSawonPrice, useCakeBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const sawonPriceNative = useC4eiSawonPrice()
  useEffect(() => {
    const sawonPriceNativeString = sawonPriceNative ? sawonPriceNative.toFixed(2) : ''
    document.title = `Sawon - ${sawonPriceNativeString}`
  }, [sawonPriceNative])
  // const cakePriceBusd = useCakeBusdPrice()
  // useEffect(() => {
  //   const cakePriceBusdString = cakePriceBusd ? cakePriceBusd.toFixed(2) : ''
  //   document.title = `Alba - ${cakePriceBusdString}`
  // }, [cakePriceBusd])
}

export default useGetDocumentTitlePrice
