import React, { useEffect, useState } from "react"
import Card from "../components/Card"

const Maps = () => {
    const [maps, setMaps, mapsRef] = useState()

    useEffect(() => {
        const fetchMaps = async () => {
            const result = await fetch('http://localhost:3000/v1/maps/frontend')
            const body = await result.json()
            setMaps(body)
            console.log(mapsRef.current)
        }
        fetchMaps()
    }, [])

    return (
        <div className="container fst-italic mb-5">
            <div className="row mb-3">
                <div className="col-12">
                    <h1>All Maps</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-9">
                    <div className="row mb-3">
                        <div className="col-12 col-lg-8">
                            <form className="input-group bg-primary-transparent">
                                <input type="search" className="form-control py-2 ps-4" id="search" aria-describedby="search" placeholder="Search mapname, tags..." />
                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                            </form>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-content-end align-items-center">
                            <p className="mb-0 pe-2">Sort by</p>
                            <div className="dropdown">
                                <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Default</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        <div className="col mb-3">
                            <Card headline={maps} subline="easy" />
                        </div>
                        <div className="col mb-3">
                            <Card headline="Super Mario" subline="easy" />
                        </div>
                        <div className="col mb-3">
                            <Card headline="Super Mario" subline="easy" />
                        </div>
                        <div className="col mb-3">
                            <Card headline="Super Mario" subline="easy" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 bg-primary-transparent">
                    <h3>Filter</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">Featured</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">Featured</label>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}

export default Maps