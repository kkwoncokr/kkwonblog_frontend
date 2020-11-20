import faker from 'faker';

const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const initialState = {
    mainPosts:[{
        id: 1,
        User:{
            id:1,
            nickname:'강경원',
        },
        head:'첫번째 게시글 입니다.',
        content:faker.lorem.paragraph(),
        Images:[{
            src:faker.image.image()
        }]
    },{
        id: 2,
        User:{
            id:1,
            nickname:'강경원',
        },
        head:'두번째 게시글 입니다.',
        content:faker.lorem.paragraph(),
        Images:[{
            src:faker.image.image()
        }]
    }],
    imagePaths:[],
    addPostDone:false,
    addPostLoading:false,
    addPostError:null
}

export default function post (state = initialState, action) {
    switch(action.type) {
        case LOAD_POST_REQUEST :
            return {
                ...state,
                addPostLoading:true,
            }
        case LOAD_POST_SUCCESS :
            return {
                ...state,
                addPostLoading:false,
                addPostDone:true
            }
        case LOAD_POST_FAILURE :
            return {
                ...state,
                addPostError:action.error
            }
        default:
            return {
                ...state
            }
    }
}

