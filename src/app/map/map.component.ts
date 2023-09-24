import { Component, AfterViewInit, Input } from '@angular/core'

import * as L from 'leaflet'
import { mapData } from '../data/mapData'
import { IMapData } from '../models/mapData'
import { LatLngExpression, LatLngTuple } from 'leaflet'

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
	private map: any
	marker: any
	selectedCity: LatLngTuple = [0, 0]

	@Input() mapDates: IMapData[] = mapData
	resetCoordinates = null

	onResetCoordinates(): void {
		this.map.setView([0, 0])
		this.map.setZoom(3)
	}

	onReset(): void {
		this.onResetCoordinates()
		this.map.removeLayer(this.marker)
	}

	onCityChange(coordinates: LatLngTuple): void {
		this.selectedCity = coordinates
		this.updateMapCenter()
		if (!this.marker) {
			this.map.removeLayer(this.marker)
		}
	}

	private initMap(): void {
		const centerCoordinates: LatLngExpression = this.selectedCity
		this.map = L.map('map', {
			center: centerCoordinates,
			zoom: 3,
		})
		const tiles = L.tileLayer(
			'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			{
				maxZoom: 18,
				minZoom: 3,
				attribution:
					'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
			}
		)
		tiles.addTo(this.map)
	}

	private updateMapCenter(): void {
		if (!this.selectedCity) {
			this.onResetCoordinates()
			if (this.map && this.marker) {
				this.map.removeLayer(this.marker)
			}
		}
		console.log(this.selectedCity.length)

		if (this.map && this.selectedCity.length > 0) {
			this.map.setZoom(9)
			if (this.marker) {
				this.map.removeLayer(this.marker)
			}
			this.marker = L.marker(this.selectedCity).addTo(this.map)
			const centerCoordinates: LatLngExpression = this.selectedCity
			this.map.setView(centerCoordinates)
		}
	}

	ngAfterViewInit(): void {
		this.initMap()
	}
}
