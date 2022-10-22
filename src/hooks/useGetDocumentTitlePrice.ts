import { useEffect } from 'react'
// import { useCakeBusdPrice } from 'hooks/useBUSDPrice'
import { useC4eiAlbaPrice, useCakeBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const albaPriceNative = useC4eiAlbaPrice()
  useEffect(() => {
    const albaPriceNativeString = albaPriceNative ? albaPriceNative.toFixed(2) : ''
    document.title = `Alba - ${albaPriceNativeString}`
  }, [albaPriceNative])
  // const cakePriceBusd = useCakeBusdPrice()
  // useEffect(() => {
  //   const cakePriceBusdString = cakePriceBusd ? cakePriceBusd.toFixed(2) : ''
  //   document.title = `Alba - ${cakePriceBusdString}`
  // }, [cakePriceBusd])
}

export default useGetDocumentTitlePrice
