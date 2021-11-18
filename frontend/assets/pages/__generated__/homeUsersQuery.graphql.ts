/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type homeUsersQueryVariables = {};
export type homeUsersQueryResponse = {
    readonly getUsers: ReadonlyArray<{
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
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUsers",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUsers",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2971b01754a69cf5c81991ad59fec225",
    "id": null,
    "metadata": {},
    "name": "homeUsersQuery",
    "operationKind": "query",
    "text": "query homeUsersQuery {\n  getUsers {\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '2f3df39835a564899338235c4643dfde';
export default node;
