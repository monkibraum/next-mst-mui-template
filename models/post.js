import { types, getRoot, flow, getSnapshot, getParent, hasParent } from "mobx-state-tree"
import R from "../repositories/post"

const Post = types.model({
  id: types.optional(types.string, ""),
  _id: types.optional(types.string, ""),
  type: types.optional(types.string, ""),
  subtype: types.optional(types.string, ""),
  target_name : types.optional(types.string, ""),
  host : types.optional(types.string, ""),
  host_name : types.optional(types.string, ""),
  host_contact : types.optional(types.string, ""),
  createdAt : types.optional(types.string, ""),
  updatedAt : types.optional(types.string, ""),
})
.actions(self => ({
 
  updatePost : flow(function* ( newData ){ 
    try {
        const jwt = getRoot(self).AuthStore.jwt
        const request = yield R.updatePost(self._id, jwt, newData)
        const { data } = request;
        delete data.__v;
        data.host = data.host._id
        for (var key in data) {
          self[key] = data[key]
        }
        getParent(self,2).updatePosts(getSnapshot(self))
        
    } catch (error) {
        // ... including try/catch error handling
        console.error(error)
    }
  }),

  deletePost : flow(function* (){ 
    try {
        const jwt = getRoot(self).AuthStore.jwt
        const request = yield R.deletePost(self._id, jwt)
        const _id = request.data.id
        getParent(self,2).updatePosts(_id, true)
        
    } catch (error) {
        // ... including try/catch error handling
        console.error(error)
    }
  })
}))


export default Post