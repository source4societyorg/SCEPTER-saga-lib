# SCEPTER-saga-utilities

Utilities that are useful with the SCEPTER framework

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/SCEPTER-saga-utilities.svg?branch=master)](https://travis-ci.org/source4societyorg/SCEPTER-saga-utilities)

[![codecov](https://codecov.io/gh/source4societyorg/SCEPTER-saga-utilities/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/SCEPTER-saga-utilities)

## defaultMakeReducerSpecificSaga

This function will wrap any generator and cause it to be reducer specific (it won't execute the saga if the reducer key does not match, even if it is listening for the same event).

It includes `defaultIfValidReducerKey` as the mechanism for comparing reducer keys.

### Arguments
`reducerKey`: The reducer key to match. 
`sequence`: The saga to wrap 
`injectedIfValidReducerKey`: Optional. To be used to replace the default reducer key comparison logic.

## defaultIfValidReducerKey

This function is included in defaultMakeReducerSpecificSaga by default and compares reducer key to the one found in the action associated with the event.

### Arguments

`reducerKey`: The reducerKey associated with the reducer key specific saga.
`action`: The action containing the reducerKey of the event
`callback`: The wrapped generator, usually a saga.