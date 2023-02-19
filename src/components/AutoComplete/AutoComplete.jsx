import './AutoComplete.css'
import { useRef, useState } from 'react'
import { getActiveToken } from '../../constants'
import { useSearchBox } from 'react-instantsearch-hooks'
import { ShowHits } from '../showHits/ShowHits'
import { getCaretCoordinates } from 'textarea-caret'

export function AutoComplete () {
  const inputRef = useRef()
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const { refine } = useSearchBox()

  /*
  const { top, height } = inputRef.current
    ? getCaretCoordinates(inputRef.current, inputRef.current.selectionEnd)
    : { top: 0, height: 0 }
    */

  const hadleInput = () => {
    const { value, selectionEnd = 0 } = inputRef.current
    const { word } = getActiveToken(value, selectionEnd)
    const shouldOpenAutocomplete = /^@\w{1,15}$/.test(word)
    setShowAutocomplete(shouldOpenAutocomplete)
    shouldOpenAutocomplete && refine(word.slice(1))
  }

  const handleSelection = userHandle => {
    const { value, selectionEnd = 0 } = inputRef.current
    const { word, range } = getActiveToken(value, selectionEnd)
    const [index] = range

    const prefix = value.substring(0, index)
    const suffix = value.substring(index + word.length)

    const newText = prefix + `@${userHandle}` + suffix
    inputRef.current.value = newText
    inputRef.current.focus()
    setShowAutocomplete(false)
  }

  return (
    <main className='container'>
      <section className='box'>
        <div className='box-body'>
          <aside className='box-avatar'>
            <img src='https://unavatar.io/kiskee' alt='kiskee' />
          </aside>

          <div className='box-compose'>
            <form>
              <textarea
                placeholder='¿Qué está pasando?'
                className='box-textbox'
                onKeyUp={hadleInput}
                ref={inputRef}
                onClick={() => {}}
              />
            </form>
            {showAutocomplete && <ShowHits handleSelection={handleSelection} />}
          </div>
        </div>

        <footer className='box-footer'>
          <button type='submit' className='tweet-button'>
            Twittear
          </button>
        </footer>
      </section>
    </main>
  )
}
