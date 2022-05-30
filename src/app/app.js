import angular from 'angular';
import { BehaviorSubject } from 'rxjs';
export const app = angular.module('app', []);

export const counter = new BehaviorSubject(42);
export const incCounter = () => { counter.next(counter.getValue() + 1); }

app.controller("AppCtrl", function AppCtrl($rootScope, $timeout) {
  this.props = {
    name: "Angie Prop",
    counter,
    incCounter
  };
  counter.subscribe(_ => $timeout(() => { $rootScope.$digest(); }, 0));
});

