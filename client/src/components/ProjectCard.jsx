import React from 'react'

export default function ProjectCard({ project }) {
    return (
        <div className="col-md-4 my-4">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{project.name}</h5>
                        <a href={`/projects/${project.id}`} className="btn btn-light">نمایش </a>
                    </div>
                    <p className="small">
                        وضعیت: <strong>{project.status}</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
