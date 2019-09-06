import { types, getRoot, flow, getSnapshot } from "mobx-state-tree"
import Post from "../models/post"
import R from "../repositories/post"

const PostStore = types.model({
  posts : types.optional(types.array(Post), [] ),
})
.actions(self => ({

  findAllPublicPosts: flow(function* a(){ 
    try {
        const request = yield R.findAllPublicPosts()
        const { data } = request;
        data.forEach((d)=>{
          delete d.__v;
          d.host = d.host._id
        })
        self.posts = data
    } catch (error) {
        // ... including try/catch error handling
        console.error("Failed to fetch projects", error)
    }
  }),

  findOnePost : flow(function* b( _id ){ 
    try {
        const request = yield R.findOnePost(_id)
        const { data } = request;
        delete data.__v;
        data.host = data.host._id
        self.posts = [data]
    } catch (error) {
        // ... including try/catch error handling
        console.error("Failed to fetch projects", error)
    }
  }),

  updatePosts : function cc(updated, remove=false) {
    const copy = JSON.parse(JSON.stringify(getSnapshot(self.posts)));
    const index = copy.findIndex( camp => camp._id === updated.id )
    remove? copy.splice(index,1) : copy[index] = updated;
    self.posts = copy;
    console.log(getSnapshot(self.posts))
  }
}))
.views(self => ({
  get hosting_posts() {
      return self.posts.filter(post => post.author === getRoot(self).AuthStore.name )
  },
}))


export default PostStore