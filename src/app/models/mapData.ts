import { LatLngTuple } from 'leaflet'

export interface IMapData {
	id: number
	city: string

	coordinates: LatLngTuple | null
	// coordinates: { latitude: number; longitude: number }
}
