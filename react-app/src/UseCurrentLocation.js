import { useState } from "react";

export default function useCurrentLocation(){
  const [coords,setCoords]=useState({})
  const [err,setErr]=useState()

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success,error);
    } else {
       setErr("Geolocation is not aviable.")
    }
  }

  function success(position) {
   setCoords({
      latitude : position.coords.latitude,
      longitude : position.coords.longitude,
      accuracy : position.accuracy
    })
  }

  function error(){
    setErr("Geolocation is not aviable.")
  }

    return {getCurrentLocation,coords,err}
}