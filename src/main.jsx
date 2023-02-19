import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-hooks'

const searchClient = algoliasearch(
  'latency',
  'a4390aa69f26de2fd0c4209ff113a4f9'
)

const INDEX_NAME = 'autocomplete_twitter_accounts'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <InstantSearch
    searchClient={searchClient}
    indexName={INDEX_NAME}
    suppressExperimentralWarning
  >
    <App />
  </InstantSearch>
)
