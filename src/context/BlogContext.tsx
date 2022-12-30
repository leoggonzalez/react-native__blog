import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createDataContext } from './createDataContext';

interface Post {
  id: string;
  title?: string;
}

function blogReducer(
  state: Post[],
  action: { type: string; payload?: any }
): Post[] {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter((item) => item.id !== action.payload);
    case 'add_blogpost':
      const id = uuidv4();

      return [
        ...state,
        {
          id,
          title: 'Untitled blog post',
        },
      ];
    default:
      return state;
  }
}

function addBlogPost(
  dispatch: ({ type }: { type: string; payload: { title?: string } }) => void
): (payload: { title?: string }) => void {
  return (payload) => {
    dispatch({ type: 'add_blogpost', payload });
  };
}

function deleteBlogPost(
  dispatch: ({ type }: { type: string; payload?: string }) => void
): (id?: string) => void {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
