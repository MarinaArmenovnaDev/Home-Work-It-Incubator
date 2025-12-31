import React from 'react'
import {pureAddUserCallback, type UserType} from '../HW3'

let initialState: UserType[]
const setName = (value: React.SetStateAction<UserType[]>) => {
    if (typeof value === 'function') {
        // Если передана функция-обновление
        const updater = value as (prev: UserType[]) => UserType[]
        initialState = updater(initialState)
    } else {
        // Если передано значение
        initialState = value
    }
}
beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
