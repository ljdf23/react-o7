import { ActionTypes } from './Types';
export const ShopReducer = (storeData, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data,
                [`${action.payload.dataType}_total`]: action.payload.total,
                [`${action.payload.dataType}_params`]: action.payload.params
            };
            break;

        case ActionTypes.DATA_SET_PAGESIZE:
            return {...storeData, pageSize: action.payload }
            break;

        case ActionTypes.DATA_SORT_PROPERTY:
            return {...storeData, sortKey: action.payload }
            break;

        default:
            return storeData || {}
            break;
    }
}