import { AuthActionCreator } from "./auth/actionCreators";
import { EventActionCreator } from "./event/actionCreators";

export const allActions = {
    ...AuthActionCreator,
    ...EventActionCreator
}