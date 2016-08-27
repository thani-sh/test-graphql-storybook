import React from 'react';
import GraphiQL from 'graphiql';
import '../node_modules/graphiql/graphiql.css';

function FullScreen(props) {
  const style = {position: 'absolute', top: 0, right: 0, bottom: 0, left: 0};
  return (
    <div style={style}>
      {props.children}
    </div>
  );
}

export default function(config = {}) {
  function fetcher(params) {
    return fetch(config.url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    }).then(response => response.json());
  }

  return function (name, _query, variables = '{}') {
    const lines = _query.split('\n');
    const spaces = lines[lines.length - 1].length - 1;
    const query = lines.map((l, i) => i === 0 ? l : l.slice(spaces)).join('\n');
    this.add(name, () => (
      <FullScreen>
        <GraphiQL query={query} variables={variables} fetcher={fetcher} />
      </FullScreen>
    ));
  };
}
