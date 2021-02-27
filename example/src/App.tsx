import React, { Fragment } from 'react'
import PersianTools from 'react-persian-tools'

const App = () => {
  return <Fragment>
    <PersianTools.WordsToNumber>منفی سه هزارمین</PersianTools.WordsToNumber><br />
    <PersianTools.WordsToNumber fuzzy>یگصد و بنجاه هزار</PersianTools.WordsToNumber><br />
    <PersianTools.NumberToWords>500,443</PersianTools.NumberToWords><br />
    <PersianTools.NumberToWords ordinal>500,443</PersianTools.NumberToWords>
    <PersianTools.AddCommas>30000000</PersianTools.AddCommas><br />
    <PersianTools.RemoveCommas>30,000,000</PersianTools.RemoveCommas><br />
    <PersianTools.DigitsArToEn>٠١٢٣٤٥٦٧٨٩</PersianTools.DigitsArToEn><br />
    <PersianTools.DigitsArToFa>٠١٢٣٤٥٦٧٨٩</PersianTools.DigitsArToFa><br />
    <PersianTools.DigitsEnToFa>123۴۵۶</PersianTools.DigitsEnToFa><br />
    <PersianTools.DigitsFaToEn>123۴۵۶</PersianTools.DigitsFaToEn><br />
  </Fragment>
}

export default App
