import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DweetSettingsEnum } from './../enum/DweetSettingsEnum'
import { Content } from './../models/content'
import { With } from './../models/with'
import { Dweet } from './../models/dweet'
import 'rxjs/add/operator/map'

@Injectable()
export class DweetServiceProvider {

    private dweetioApiUrl = DweetSettingsEnum.DWEET_URL_GET_ALL

    constructor(public http: HttpClient) {
        console.log('Hello DweetServiceProvider Provider')
    }

    //Load last five dweets
    loadLastDweets(thingName: string) {
        return this.http.get(this.dweetioApiUrl + thingName)
        .map(res => res.json())
    }

    preencherDweet(data: any) {
        let dweet: Dweet
        let _withs: Array<With>
        let _date: string
        let _time: string

        _withs = new Array<With>()

        for (let _with of data.with) {
            
            let tempContent: Content
            tempContent = new Content(_with.content.temperatura)

            _date = this.formatDate(_with.created)
            _time = this.formatTime(_with.created)

            let tempWith: With
            tempWith = new With(_with.thing, _with.created, tempContent, _date, _time)

            _withs.push(tempWith)
        }

        dweet = new Dweet(data.this, data.by, data.the, _withs)

        return dweet
    }

    private formatDate(date: any): string {
        let originalDate: string = date
        var dateParse = originalDate.slice(0,10)
        return dateParse
    }

    private formatTime(date: any): string {
        let originalDate: string = date
        var timeParse = originalDate.slice(11,19)
        return timeParse
    }

}