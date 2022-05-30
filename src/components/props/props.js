import "../../app/app";
import Props from "./Props.vue";
import { createApp } from "vue";
import angular from "angular";

angular.module('app').component("props", {
  // template: `<span>Name: {{$ctrl.props.name}}</span>`,
  template: `<props-vue></props-vue>`,
  bindings: {
    props: "=",
  },
  // controller: ($element, $scope, $timeout) => {}
  controller: ($element, $scope, $timeout) =>
    $timeout(() => createApp(Props, { props: $scope.$ctrl.props }).mount($element.find("props-vue")[0]), 0),
});
