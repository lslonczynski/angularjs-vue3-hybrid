import { app, counter, incCounter } from "../../app/app";
import "../internal/internal";


// app.directive("external", () => ({
//   template: require("./external.html"),
//   controller: () => ({}),
// }));

app.component("external", {
  template: require("./external.html"),
  controller: ($scope) => {
    $scope.counter = counter;
    $scope.currentCounter = counter.getValue();
    $scope.incCounter = incCounter;
  },
});
