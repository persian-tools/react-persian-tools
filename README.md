<div align="center">
	<p align="center">
		<img src="./images/logo.png" width="200" />
	</p>
	<h1 align="center">react-persian-tools</h1>
	<p align="center">React wrapper component around persian tools</p>

![CI/CD](https://github.com/persian-tools/react-persian-tools/workflows/Continuous%20Integration/badge.svg)
[![codecov](https://codecov.io/gh/persian-tools/react-persian-tools/branch/master/graph/badge.svg)](https://codecov.io/gh/persian-tools/react-persian-tools)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/persian-tools/react-persian-tools/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/persian-tools/react-persian-tools/compare) 
[![CodeFactor](https://www.codefactor.io/repository/github/persian-tools/react-persian-tools/badge/master)](https://www.codefactor.io/repository/github/persian-tools/react-persian-tools/overview/master)
[![NPM](https://img.shields.io/npm/v/@persian-tools/react-persian-tools.svg)](https://www.npmjs.com/package/react-persian-tools) 
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://persian-tools.github.io/react-persian-tools/)
[![GitHub contributors](https://img.shields.io/github/contributors/persian-tools/react-persian-tools.svg)](https://GitHub.com/persian-tools/react-persian-tools/contributors/)

</div>
<hr />

## Demo

https://persian-tools.github.io/react-persian-tools/

![alt text](./images/demo.gif "Preview")

## Install

```bash
npm install --save react-persian-tools
```

## Usage

```tsx
import React, { Component } from 'react'

import PersianTools from 'react-persian-tools'

class Example extends Component {
  render() {
    return (
      <>
        <PersianTools.WordsToNumber>منفی سه هزارمین</PersianTools.WordsToNumber>
        <PersianTools.WordsToNumber fuzzy>یگصد و بنجاه هزار</PersianTools.WordsToNumber>
        <PersianTools.NumberToWords>500,443</PersianTools.NumberToWords>
        <PersianTools.NumberToWords ordinal>500,443</PersianTools.NumberToWords>
        <PersianTools.AddCommas>30000000</PersianTools.AddCommas>
        <PersianTools.RemoveCommas>30,000,000</PersianTools.RemoveCommas>
        <PersianTools.DigitsArToEn>٠١٢٣٤٥٦٧٨٩</PersianTools.DigitsArToEn>
        <PersianTools.DigitsArToFa>٠١٢٣٤٥٦٧٨٩</PersianTools.DigitsArToFa>
        <PersianTools.DigitsEnToFa>123۴۵۶</PersianTools.DigitsEnToFa>
        <PersianTools.DigitsFaToEn>123۴۵۶</PersianTools.DigitsFaToEn>
      </>
    )
  }
}
```

## Contributing

Thank you for your interest in contributing! Please feel free to put up a PR for any issue or feature request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/persian-tools/react-persian-tools/blob/master/LICENSE) file for details.
