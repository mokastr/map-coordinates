import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MapComponent } from './map/map.component'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { NgFor } from '@angular/common'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
	declarations: [AppComponent, MapComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
		NgFor,
		MatInputModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
