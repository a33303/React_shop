import React, {createElement as e, useState} from 'react';

function App() {
    const [count, setCount] = useState(0)

    return e('div', {className: 'container'}, [
        e('h1', {className: 'font-bold', key: 1}, `Clicked: ${count}`),
        e('button', {
            className: 'pv-2 px-4 border',
            key:2,
            onClick: () => setCount(count + 1)
        }, 'Click me!')
    ])
}

export default App;