import { ActionType } from '../type';

export interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

export interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}