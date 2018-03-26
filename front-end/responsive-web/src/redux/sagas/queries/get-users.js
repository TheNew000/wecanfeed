import { takeLatest, put } from "redux-saga/effects";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './../../reducers/interactions/user-management';

const client = new ApolloClient({
  uri: 'http://localhost:4200/graphql'
});

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* getUsers() {
  yield takeLatest(GET_USERS_REQUEST, willGetUsers);
}

const query = gql`
  {
    getUsers
  }
`;

// function that makes the api request and returns a Promise for response
function get() {
  return client.query({ query });  
}

// worker saga: makes the api call when watcher saga sees the action
function* willGetUsers() {
  try {
    const response = yield get(fetch);
    const users = response.data.getUsers;

    yield put({ type: GET_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: GET_USERS_FAILURE, error });
  }
}
