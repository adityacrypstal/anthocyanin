const actions = {
    GET_CAREERS: 'GET_CAREERS',
    UPDATE_CAREERS: 'UPDATE_CAREERS',
    LOADING: 'LOADING',
    APPLY_CAREERS:'APPLY_CAREERS',
    APPLYING:'APPLYING',
    APPLIED:'APPLIED',
    getCareers: (page) => ({
        type: actions.GET_CAREERS,
        payload:page
    }),
    apply:(data)=>({
        type: actions.APPLY_CAREERS,
        payload:data
    })
}
export default actions;
