import React from 'react'

export default function Weatherprod({data}) {
  return (
    <div>
      {data.weather.main}
    </div>
  )
}
