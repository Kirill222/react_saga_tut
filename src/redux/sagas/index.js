import {takeEvery, put} from 'redux-saga/effects'

//put - указывает middleware отправить действие в store - то же самое что и сделать dispatch
//перед каждым оператором Redux Saga нужно ставить yield

async function getPeople() {
    const request = await fetch('http://swapi.dev/api/people')

    const data = await request.json()

    return data
}


export function* workerSaga() {
    const data = yield getPeople()
    
    yield put({type: 'SET_PEOPLE', payload: data.results})
}

export function* watchClickSaga() {

        yield takeEvery('CLICK', workerSaga)      

}

export default function* rootSaga() {
    yield watchClickSaga()
}