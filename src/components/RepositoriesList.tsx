import React, { FormEventHandler, useState } from 'react';

export const RepositoriesList:  React.FC = () => {
    const [term, setTerm] = useState('');

    const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
    };

    return <div>
        <form>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button onSubmit={onSubmit}>Search</button>
        </form>
    </div>
}