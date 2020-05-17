const actions = {
    SUBMIT_CONTACT: 'SUBMIT_CONTACT',
    LOADING: 'LOADING',
    submit: (data) => ({
        type: actions.SUBMIT_CONTACT,payload:data
    })
}
export default actions;
