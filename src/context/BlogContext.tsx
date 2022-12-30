import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createDataContext } from './createDataContext';

interface Post {
  id: string;
  title?: string;
}

function blogReducer(state: Post[], action: { type: string }): Post[] {
  switch (action.type) {
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
  dispatch: ({ type }: { type: string }) => void
): () => void {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
