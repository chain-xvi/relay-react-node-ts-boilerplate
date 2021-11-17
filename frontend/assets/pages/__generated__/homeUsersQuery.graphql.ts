/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type homeUsersQueryVariables = {};
export type homeUsersQueryResponse = {
    readonly getUsers: ReadonlyArray<{
        readonly name: string;
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
    "cacheID": "bc97515d395f77977a31c0c961d71bd8",
    "id": null,
    "metadata": {},
    "name": "homeUsersQuery",
    "operationKind": "query",
    "text": "query homeUsersQuery {\n  getUsers {\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '2f3df39835a564899338235c4643dfde';
export default node;
