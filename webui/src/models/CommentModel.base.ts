/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CommentBase
 * auto generated base class for the model CommentModel.
 *
 * Represents comment's on a Pokemon
 */
export const CommentModelBase = ModelBase
  .named('Comment')
  .props({
    __typename: types.optional(types.literal("Comment"), "Comment"),
    /** Comment ID */
    id: types.identifier,
    /** comment on a pokemon */
    comment: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CommentModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get comment() { return this.__attr(`comment`) }
}
export function selectFromComment() {
  return new CommentModelSelector()
}

export const commentModelPrimitives = selectFromComment().comment
