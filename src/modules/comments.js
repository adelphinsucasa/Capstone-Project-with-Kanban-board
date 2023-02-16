const countComments = () => {
    const ulComments = document.querySelector('.ulComments');
    console.log(ulComments.children.length);
    return (ulComments.children.length === undefined) ? 0 : ulComments.children.length;
};

export default countComments;