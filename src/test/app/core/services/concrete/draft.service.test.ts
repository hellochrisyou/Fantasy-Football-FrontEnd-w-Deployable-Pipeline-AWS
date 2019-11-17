/*
 * File generated by Test generator (dotup.dotup-vscode-test-generator)
 * Date: 2019-11-17 09:42:32
*/
import { expect } from 'chai';
import { DraftService } from '../../../../../app/core/services/concrete/draft.service';
import { Injectable } from "@angular/core";
import { QB, RB, WR, TE, DEF, Kicker, Player } from "@shared/model/interface.model";
import { HttpClient } from "@angular/common/http";
import * as globals from "@shared/var/enum";
import { ApiService } from '../../../../../app/core/services/api/api.service';
import { FilterService } from '../../../../../app/core/services/logic/filter.service';
import { NotifyService } from '../../../../../app/core/services/emit/notify.service';
import { StatsFunctionService } from '../../../../../app/core/services/logic/stats-function.service';
import { ThirdPartyService } from '../../../../../app/core/services/abstract/third-party.service';

describe('Test class DraftService', () => {

it('DraftService-setLastSeasonQB', () => {
// Arguments
const http1 = undefined;
const statsFunctionService1 = undefined;
const api1 = undefined;
const filterService1 = undefined;
const notifyService1 = undefined;

// Method call
const draftService = new DraftService(http1, statsFunctionService1, api1, filterService1, notifyService1);
 draftService.setLastSeasonQB();
});

it('DraftService-setLastSeasonRB', () => {
// Arguments
const http2 = undefined;
const statsFunctionService2 = undefined;
const api2 = undefined;
const filterService2 = undefined;
const notifyService2 = undefined;

// Method call
const draftService = new DraftService(http2, statsFunctionService2, api2, filterService2, notifyService2);
 draftService.setLastSeasonRB();
});

it('DraftService-setLastSeasonWR', () => {
// Arguments
const http3 = undefined;
const statsFunctionService3 = undefined;
const api3 = undefined;
const filterService3 = undefined;
const notifyService3 = undefined;

// Method call
const draftService = new DraftService(http3, statsFunctionService3, api3, filterService3, notifyService3);
 draftService.setLastSeasonWR();
});

it('DraftService-setLastSeasonTE', () => {
// Arguments
const http4 = undefined;
const statsFunctionService4 = undefined;
const api4 = undefined;
const filterService4 = undefined;
const notifyService4 = undefined;

// Method call
const draftService = new DraftService(http4, statsFunctionService4, api4, filterService4, notifyService4);
 draftService.setLastSeasonTE();
});

it('DraftService-setLastSeasonDEF', () => {
// Arguments
const http5 = undefined;
const statsFunctionService5 = undefined;
const api5 = undefined;
const filterService5 = undefined;
const notifyService5 = undefined;

// Method call
const draftService = new DraftService(http5, statsFunctionService5, api5, filterService5, notifyService5);
 draftService.setLastSeasonDEF();
});

it('DraftService-setLastSeasonK', () => {
// Arguments
const http6 = undefined;
const statsFunctionService6 = undefined;
const api6 = undefined;
const filterService6 = undefined;
const notifyService6 = undefined;

// Method call
const draftService = new DraftService(http6, statsFunctionService6, api6, filterService6, notifyService6);
 draftService.setLastSeasonK();
});

});
