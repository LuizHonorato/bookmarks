export const add = text => {
  return { type: "BOOKMARK_ADDED", text };
};

export const remove = id => {
  return { type: "BOOKMARK_REMOVED", id };
};
