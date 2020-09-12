export const getFeaturedPost = (allPosts) => {
  const featuredPosts = allPosts.filter(({ node: post }) => {
    const { tags } = post.frontmatter;
    return tags.includes('featured');
  });
  const featuredPost = featuredPosts[0].node;
  return { post: featuredPost, id: featuredPost.id };
};

export const getFirstFivePosts = (allPosts, featuredPostId) => {
  const postList = [];
  allPosts.forEach(({ node: post }) => {
    if (post.id !== featuredPostId && postList.length < 5) {
      postList.push(post);
    }
  });
  return postList;
};
