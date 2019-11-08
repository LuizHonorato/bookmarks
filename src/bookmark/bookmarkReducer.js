const initialState = [
  {
    bookmarks: []
  }
];

export default function bookmarks(state = initialState, action) {
  switch (action.type) {
    case "BOOKMARK_ADDED":
      return [
        ...state,
        {
          id:
            state.reduce(
              (maxId, bookmark) => Math.max(bookmark.id, maxId),
              -1
            ) + 1,
          description: action.text
        }
      ];
    case "BOOKMARK_REMOVED":
      return { ...state.filter(bookmark => bookmark.id !== action.id) };
    default:
      return state;
  }
}
