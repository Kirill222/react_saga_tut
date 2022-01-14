import {take} from 'redux-saga/effects'

//take - указывает middleware ждать выполнения какого либо действия. По сути ждет какого либо диспатча в нашем приложении

//for business actions. API requests, requests to cache, and other async actions
export function* workerSaga() {
    console.log('click from saga')
}

export function* watchClickSaga() {
    while (true) {
        yield take('CLICK')                //CLICK is a type of the action that we will dispatch

        yield workerSaga()
    }
}

export default function* rootSaga() {
    yield watchClickSaga()
}