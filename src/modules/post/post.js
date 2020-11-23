import faker from 'faker';
import shortId from 'shortid';
import produce from 'immer';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

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
            default:
            break;
        }
    })
}
export default post;
