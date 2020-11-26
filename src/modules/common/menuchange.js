const BOARD_CHANGE = 'BOARD_CHANGE';
const PROFILE_CHANGE = 'PROFILE_CHANGE';

export const board_change = () => ({type: BOARD_CHANGE});
export const profile_change = () => ({type: PROFILE_CHANGE});

export const initialState = ({
    board : true,
    profile : false,
});

const change = (state = initialState, action) => {
    switch(action.type) {
        case BOARD_CHANGE:
            return{
                ...state,
                board : true,
                profile : false,
            }
        case PROFILE_CHANGE:
            return {
                ...state,
                board : false,
                profile : true,
            }
        default:
            return false;
    }
}
export default change;