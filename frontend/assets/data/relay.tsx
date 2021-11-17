import React from 'react';

import {
  RelayEnvironmentProvider
} from 'react-relay';

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

export const store = new Store(new RecordSource());

type HttpError = {
  message: string
  key: string
  path: string[]
  name: string
}

export function Relay(props: {children: React.ReactNode}){
  const environment = React.useMemo(
    function(){
      return new Environment({
        network: Network.create(
          function (operation, variables) {
            return (
              fetch(
                process.env.API as string,
                {
                  method: 'post',
                  body: JSON.stringify({
                    query: operation.text,
                    variables
                  }),
                  headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                  }
                },
              )
              .then(resp => resp.json())
              .then(
                response => {
                  if(response.errors){
                    const er: any = new Error('ServerError');
                    er.data = response.data;
                    er.errors = response.errors;
                    
                    return Promise.reject(er);
                  }
                  return response;
                }
              )
            );
          }
        ),
        store
      });
    },
    []
  );

  return(
    <RelayEnvironmentProvider environment={environment} >
      {props.children}
    </RelayEnvironmentProvider>
  );
}