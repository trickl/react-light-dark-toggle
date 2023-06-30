# React Light Dark Toggle
[![Build Status](https://app.travis-ci.com/trickl/react-light-dark-toggle.svg?branch=main)](https://app.travis-ci.com/trickl/react-light-dark-toggle)
[![Maintainability](https://api.codeclimate.com/v1/badges/6996a07af2a8fac4294c/maintainability)](https://codeclimate.com/github/trickl/react-light-dark-toggle/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6996a07af2a8fac4294c/test_coverage)](https://codeclimate.com/github/trickl/react-light-dark-toggle/test_coverage)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A customizable React switch for changing between light and dark mode.

## Examples

#### Regular

![RegularExample](https://github.com/trickl/react-light-dark-toggle/blob/master/gifs/LightDarkToggleRegular.gif)

#### Styled Like the Google Fonts Toggle

![GoogleFontExample](https://github.com/trickl/react-light-dark-toggle/blob/master/gifs/GoogleFontsStyling.gif)

## Install
```bash
npm i react-light-dark-toggle
```

## Usage and Demo
[Visit The Storybook Page](https://www.chromatic.com/component?buildNumber=11&historyLengthAtIndex=15&distanceToMoveBack=-4&appId=6186a9e3a34691003aa4de0c&name=LightDarkToggle&specName=Full%20Screen&componentInspectorKey=619009abfdbe08003a1eeeca-1200-interactive-true)

## Documentation

### Component Props

<!-- props-table-start -->

| Property | PropType | Required | Default | Description |
|----------|----------|----------|---------|-------------|
| sunIconComponent | `` |  | `() => <img src={SunIconSrc} alt="light" />` | The component representing the light mode (sun) icon |
| moonIconComponent | `` |  | `() => <img src={MoonIconSrc} alt="dark" />` | The component representing the dark mode (moon) icon |
| showSunTransform | `` |  | `'translateY(0) translateX(-1em)'` | The transform to apply when showing the sun icon |
| hideSunTransform | `` |  | `'translateY(4em) translateX(-1em)'` | The transform to apply when hiding the sun icon |
| showMoonTransform | `` |  | `'translateY(0) translateX(1em)'` | The transform to apply when showing the moon icon |
| hideMoonTransform | `` |  | `'translateY(-4em) translateX(1em)'` | The transform to apply when hiding the moon icon |
| showSunFilter | `` |  | `''` | The filter to apply when showing the sun icon |
| hideSunFilter | `` |  | `''` | The filter to apply when hiding the sun icon |
| showMoonFilter | `` |  | `''` | The filter to apply when showing the moon icon |
| hideMoonFilter | `` |  | `''` | The filter to apply when hiding the moon icon |
| transitionDuration | `` |  | `'750ms'` | How long transitions should take (in ms) |
| onToggle | `` |  |  | The action to apply on clicking the toggle |
| darkBorderColor | `` |  | `'grey'` |  |
| lightBorderColor | `` |  | `'lightgrey'` |  |
| darkBackgroundColor | `` |  | `'#222222'` |  |
| lightBackgroundColor | `` |  | `'#EEEEEE'` |  |

<!-- props-table-end -->
