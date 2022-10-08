import {SearchRepositoriesAction, SearchRepositoriesSuccessAction, SearchRepositoriesErrorAction} from './repositories'

export type Action = 
    | SearchRepositoriesAction 
    | SearchRepositoriesSuccessAction 
    | SearchRepositoriesErrorAction