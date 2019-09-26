//import { combineReducers } from 'redux';

const initState = {
    posts: [
        { id: 1, title: 'Title 1', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
        { id: 2, title: 'Title 2', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
        { id: 3, title: 'Title 3', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
    ]
};

const rootReducer = (state = initState, action ) => {
    //console.log(action);

    switch(action.type){
        case 'DELETE_POST':
            return {
                ...state,
                posts : state.posts.filter( post => post.id !== action.id )
            }
        
        default: 
            return state;
    }
}

export default rootReducer;