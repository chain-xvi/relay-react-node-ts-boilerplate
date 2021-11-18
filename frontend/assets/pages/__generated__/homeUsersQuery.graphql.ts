/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type homeUsersQueryVariables = {};
export type homeUsersQueryResponse = {
    readonly getUsers: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
    }>;
};
export type homeUsersQuery = {
    readonly response: homeUsersQueryResponse;
    readonly variables: homeUsersQueryVariables;
};



/*
query homeUsersQuery {
  getUsers {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getUsers",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3927e8734b02bf085ba0e6afac42e399",
    "id": null,
    "metadata": {},
    "name": "homeUsersQuery",
    "operationKind": "query",
    "text": "query homeUsersQuery {\n  getUsers {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '8c461b1ae9ccc1f7c12083d239d8db6a';
export default node;
