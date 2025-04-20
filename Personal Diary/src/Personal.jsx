import React, { useEffect, useState } from 'react'

export default function Personal() {
    const [entry, setEntry] = useState('');
    const [diary, setDiary] = useState([]);

    useEffect(() => {
        console.log("Personal Diary Component Mounted")
    }, [diary])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            text: entry,
            date: new Date().toLocaleString(),
        };
        setDiary([newEntry, ...diary]);
        setEntry('');
    };

    return (
        <div className="container">
            <div className="diary-card">
                <h1 className="title">My Personal Diary</h1>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="textarea"
                        rows="5"
                        placeholder="Write your thoughts..."
                        value={entry}
                        onChange={(e) => {
                            setEntry(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                    <button className="button" type="submit">Add Entry</button>
                </form>

                <div className="entries">
                    {diary.length === 0 ? (
                        <p className="no-entry">No entries yet.</p>
                    ) : (
                        diary.map((item, index) => (
                            <div key={index} className="entry">
                                <p className="entry-text">{item.text}</p>
                                <p className="entry-date">{item.date}</p>
                            </div>
                        ))
                    )}


                </div>
            </div>
        </div>
    )
}
