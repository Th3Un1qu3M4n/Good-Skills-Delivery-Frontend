import React, {useEffect, useState} from 'react'
import LeafMap from './LeafMap';


const Form = () => {
    const [cityFrom, setCityFrom] = useState("Dubai");
    const [cityTo, setCityTo] = useState("Dubai");
    const cityCoord = {Dubai: [25.2048, 55.2708], Sharjah: [25.3462,55.4211]}
    const [fromMarker, setFromMarker] = useState(cityCoord[cityFrom])
    const [toMarker, setToMarker] = useState(cityCoord[cityTo])

    useEffect(()=>{
        setFromMarker(cityCoord[cityFrom])
    }, [cityFrom])

    useEffect(()=>{
        setToMarker(cityCoord[cityTo])
    }, [cityTo])

    const updateFromMarker = (pos) =>{
        setFromMarker(pos);
        console.log("updated FROM",fromMarker[0],fromMarker[1])
    }
    const updateToMarker = (pos) =>{
        setToMarker(pos);
        console.log("updated TO",toMarker[0], toMarker[1])
    }
  return (
    <div>
        <section className="py-7 pb-0" id="order">
            <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-5 text-center mb-1">
                <h5 className="text-danger">ORDER</h5>
                <h2>Get Started Right Away</h2>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <h2>From:</h2>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <label htmlFor="inputNameFrom">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputFromName"
                                placeholder="Sender Name"
                            />
                            </div>
                            <div className="form-group col-md-12">
                            <label htmlFor="inputPhoneFrom">Phone No.</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="inputPhoneFrom"
                                placeholder="971-508109297"
                            />
                            </div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="inputAddressFrom">Address</label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputAddressFrom"
                            placeholder="1234 Main St"
                            />
                        </div>
                        
                        <div className="form-row">
                
                            <div className="form-group col-md-12">
                            <label htmlFor="inputStateFrom">City</label>
                            <select id="inputState" className="form-control"  value={cityFrom} onChange={(e)=>setCityFrom(e.target.value)}>
                                <option >Dubai</option>
                                <option>Sharjah</option>
                            </select>
                            </div>
                            
                        </div>
                        {/* <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div> */}
                        <div className='px-3 my-3'>
                        <LeafMap marker={fromMarker} updateMarker={updateFromMarker}></LeafMap>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <h2>To:</h2>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <label htmlFor="inputNameTo">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputNameTo"
                                placeholder="Receiver Name"
                            />
                            </div>
                            <div className="form-group col-md-12">
                            <label htmlFor="inputPhoneTo">Phone No.</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="inputPhoneTo"
                                placeholder="971-508109297"
                            />
                            </div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="inputAddressTo">Address</label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputAddressTo"
                            placeholder="1234 Main St"
                            />
                        </div>
                        
                        <div className="form-row">
                
                            <div className="form-group col-md-12">
                            <label htmlFor="inputStateTo">City</label>
                            <select id="inputStateTo" className="form-control" value={cityTo} onChange={(e)=>setCityTo(e.target.value)}>
                                <option >Dubai</option>
                                <option>Sharjah</option>
                            </select>
                            </div>
                            
                        </div>
                        
                        <div className='px-3 my-3'>
                        <LeafMap marker={toMarker} updateMarker={updateToMarker}></LeafMap>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mx-auto text-center align-center'>
                    <button type="submit" className="btn btn-primary px-5">
                        Order
                    </button>
                </div>
                </form>


                {/* <div>{fromMarker} - {cityCoord[cityTo]} */}
                {/* <div>
                <LeafMap marker={fromMarker} updateMarker={updateFromMarker}></LeafMap>
                </div> */}

                {/* <div><h2>Selected: {fromMarker[0]} , {fromMarker[1]}</h2></div> */}
                
            </div>
        </section>
    </div>
  )
}

export default Form