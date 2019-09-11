import { types } from "mobx-state-tree"

const Store = types.model({
  uid :  types.optional(types.string, ""),
  name : types.optional(types.string, ""),
  email :  types.optional(types.string, ""),
  jwt : types.optional(types.string, ""),
})
.actions(self => ({
  checkAuthState : function() {
    return new Promise( (resolve) => {
      self.name = "John"
      setTimeout( function(){resolve(self.name)}, 0)
    })
  },
}))

export default Store



