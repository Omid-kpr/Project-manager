import React from 'react'

export default function loading() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role='status'>
                <span className="sr-only"></span>
            </div>
        </div>
    )
}
