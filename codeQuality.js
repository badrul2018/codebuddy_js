// level {2}
async function getUsers() {
  let [user, profile, posts] = await Promise.all([
    getUser(),
    getProfile(),
    getPosts(),
  ]);

  const userProfile = {
    user: user,
    profile: profile,
    posts: posts,
  };

  return userProfile;
}
