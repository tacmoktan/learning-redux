
const initState = {
    posts: [
        { id: 1, title: 'Title 1', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
        { id: 2, title: 'Title 2', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
        { id: 3, title: 'Title 3', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
    ]
};

const AddPostReducer = (state = initState.posts, action) => {

    return state;
    /* switch (action.type) {

        case 'ADD_POST':
            return [
                ...state,
                
            ]

        case 'DELETE_POST':

        default:
            return state;
    } */

}
export default AddPostReducer;