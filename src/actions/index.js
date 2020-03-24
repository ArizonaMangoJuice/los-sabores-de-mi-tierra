export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_BODY = 'CHANGE_BODY'

// action creators 

export function changeTitle(title){
    return {
        type: CHANGE_TITLE,
        title
    }
}

export function changeBody(body){
    return {
        type: CHANGE_BODY,
        body
    }
}