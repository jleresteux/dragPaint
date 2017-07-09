/**
 * Created by Winnie on 6/4/2017.
 */

app.controller('myCtrl', function($scope) {
    $scope.title= "Sybil";
    $scope.images=[
        {
            id: "S1",
            mouseDown: false,
            name: "Sybil Volume1",
            cover: 'img/S1.jpg',
            rdegree: 0,
            x_old: 0,
            y_old: 0,
            x: 0,
            y:0
        },
        {
            id: "S2",
            mouseDown: false,
            name: "Sybil Volume2",
            cover: 'img/S2.jpg',
            rdegree: 0,
            x_old: 0,
            y_old: 0,
            x: 0,
            y:0
        }
    ];
    $scope.rotate=function(index){
        $scope.images[index].rdegree+=90;
    };




    $scope.dragImage = function(event, index) {

        if ($scope.images[index].mouseIsDown) {

            $scope.images[index].y = event.screenY - $scope.images[index].y_old;
            $scope.images[index].x = event.screenX - $scope.images[index].x_old;
        }

    };
    $scope.setFlag = function(event, index){
        // Prevent default dragging of selected content
        event.preventDefault();
        $scope.images[index].mouseIsDown = true;
        $scope.images[index].x_old = event.screenX - $scope.images[index].x;
        $scope.images[index].y_old = event.screenY - $scope.images[index].y;
        this.dragImage(event, index);
    };

    $scope.removeFlag = function(index){
        $scope.images[index].mouseIsDown = false;
    }

});
