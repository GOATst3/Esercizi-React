import {useEffect, useState } from "react"
import useCurrentLocation from "./UseCurrentLocation"
export default function GithunUser(){
    const {coords,err,getCurrentLocation}=useCurrentLocation()

    useEffect(()=>getCurrentLocation(),[])
    useEffect(()=>{if(err) console.error('Error: ',err)},[err])
    return(
        <>
            {err && <h1>{err}</h1>}
            {!err &&
            <>
                <h1>your current coordinates are </h1>
                <h1>Latitude: {coords.latitude} </h1> 
                <h1>Longitude: {coords.longitude} </h1>
            </>
            }
        </>
        )
        



}