import * as at from "./action_types"

const add = (object) => ({
  type: at.ADD,
  object
})

export { add }
