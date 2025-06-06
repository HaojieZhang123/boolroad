import React from 'react'

const SearchBar = () => {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Inserisci nome</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </>
    )
}

export default SearchBar