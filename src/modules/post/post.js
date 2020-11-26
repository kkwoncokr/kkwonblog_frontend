import faker from 'faker';
import produce from 'immer';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const removePost = () => ({
    type:REMOVE_POST_REQUEST,
    data:{PostId : post.id}
})

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
    addPostError:null,
    removePostDone:false,
    removePostLoading:false,
    removePostError:null,
}
const dummyPost = (data) => ({
    id: 3,
    head:data.head,
    content: data.content,
    User: {
      id: 1,
      nickname: 'kkwon',
    },
    Images: [{
        src:faker.image.image()
    }],
    Comments: [],
  });
const post = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case ADD_POST_REQUEST :
                draft.addPostLoading = true;
                break;
            case ADD_POST_SUCCESS :
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                break;
            case ADD_POST_FAILURE :
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case REMOVE_POST_REQUEST :
                draft.removePostLoading = true;
                break;
            case REMOVE_POST_SUCCESS :
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v)=> v.id !== action.data.PostId);
                break;
            case REMOVE_POST_FAILURE :
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            default:
            break;
        }
    })
}
export default post;
