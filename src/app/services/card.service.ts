import {Injectable} from '@angular/core';
import {Card} from '../card';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';



@Injectable()

export class CardService{
    constructor (private _httpclient:HttpClientModule){}

}