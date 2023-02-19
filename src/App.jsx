/*
Recursos
https://unavatar.io
https://heroicons.com
https://github.com/midudev/aprendiendo-react
*/

import { AutoComplete } from './components/AutoComplete/AutoComplete.jsx'
import { TwitterFollowCard } from './components/FollowCard/TwitterFollowCard.jsx'
import { users } from './constants'

export function App () {
  return (
    <>
      <section className='App'>
        {users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))}
      </section>
      <AutoComplete />
    </>
  )
}
