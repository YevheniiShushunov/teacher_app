import {RequestStatusEnum} from '../enums/status.enum';

interface RequestStatus {
    inProgress: boolean,
    done: boolean,
    success: boolean,
}

export const requestStatuses: RequestStatus = {
    inProgress: false,
    done: false,
    success: false
}

export const generateStatus = {
    init: () => {
      return {...requestStatuses}
    },

    request: () => {
        return {...requestStatuses, inProgress: true}
    },

    done: () => {
        return {...requestStatuses, done: true, success: true}
    },

    false: () => {
        return {...requestStatuses, done: true}
    }
}