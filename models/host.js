import { types } from "mobx-state-tree"

const User = types.model({
  id: types.string,
  _id: types.string,
  blocked: types.boolean,
  confirmed: types.boolean,
  provider: types.string,
  
})

export default User