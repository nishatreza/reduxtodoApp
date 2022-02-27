
const initialData = {
    list: []
}

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,

                    {
                        id: id,
                        data: data


                    }
                ]
            }


            break;

        default:
            return state;
            break;
    }

}

export default todoReducers;