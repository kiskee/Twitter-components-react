import { useHits } from 'react-instantsearch-hooks'

export function ShowHits ({ handleSelection, top }) {
  const { hits } = useHits()
  return (
    <div className='autocomplete-panel'>
      {hits.length > 0 && (
        <ul className='autocomplete-items'>
          {hits.map(hit => (
            <li key={hit.handle}>
              <button
                className='autocomplete-item'
                onClick={() => handleSelection(hit.handle)}
              >
                <Item hit={hit} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Item ({ hit }) {
  return (
    <div className='account-body'>
      <div className='account-avatar'>
        <img src={hit.image} alt={hit.handle} />
      </div>
      <div>
        <div className='account-name'>{hit.handle}</div>
        <div className='account-handle'>@{hit.handle}</div>
      </div>
    </div>
  )
}
