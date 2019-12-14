import React from 'react'

export const Photos = ({resource}) => {
    const photos = resource.photos.read()
    return (
        <>
        <h3>Фотки</h3>
        <ul>
            {photos.map(photo =>(
                <li key = {photo.id}>{photo.url}</li>
            ))}
        </ul>
        </>
    )
}