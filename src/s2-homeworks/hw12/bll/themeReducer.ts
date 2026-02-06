type ThemeState = {
    themeId: number;
}

type SetThemeIdAction = {
    type: 'SET_THEME_ID';
    themeId: number;
}

const initState: ThemeState = {
    themeId: 1,
}
export const themeReducer = (
    state: ThemeState = initState,
    action: SetThemeIdAction
): ThemeState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.themeId
            }
        default:
            return state
    }
}

export const changeThemeId = (themeId: number): SetThemeIdAction => ({
    type: 'SET_THEME_ID',
    themeId
})
