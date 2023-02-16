const countComments = () => {
  const ulComments = document.querySelector('.ulComments');
  return ulComments.children.length === undefined
    ? 0
    : ulComments.children.length;
};

export default countComments;
