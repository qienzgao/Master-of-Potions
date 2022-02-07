let mediaElement;
let playing = false;
// MediaElement('nyan', {
//     pluginPath: './scripts/background',
//     success: function (me) {
//         mediaElement = me;
//         me.play();
//         me.addEventListener('timeupdate', function (time) {
//             if (me.currentTime > 3.7)
//                 playing = true;
//         });
//     }
// });

let mousePos = view.center + [view.bounds.width / 3, 100];
let position = view.center;

function onFrame(event) {
    position += (mousePos - position) / 10;
    let vector = (view.center - position) / 10;
    moveStars(vector * 3);
    moveRainbow(vector, event);
}

function onMouseMove(event) {
    mousePos = event.point;
}

function onKeyDown(event) {
    if (event.key == 'space')
        project.activeLayer.selected = !project.activeLayer.selected;
}

let moveStars = new function () {
    // The amount of symbol we want to place;
    let count = 50;

    // Create a symbol, which we will use to place instances of later:
    let path = new Path.Circle({
        center: [0, 0],
        radius: 5,
        fillColor: 'white',
        strokeColor: 'black'
    });

    let symbol = new Symbol(path);

    // Place the instances of the symbol:
    for (let i = 0; i < count; i++) {
        // The center position is a random point in the view:
        let center = Point.random() * view.size;
        let placed = symbol.place(center);
        placed.scale(i / count + 0.01);
        placed.data = {
            vector: new Point({
                angle: Math.random() * 360,
                length: (i / count) * Math.random() / 5
            })
        };
    }

    let vector = new Point({
        angle: 45,
        length: 0
    });

    function keepInView(item) {
        let position = item.position;
        let viewBounds = view.bounds;
        if (position.isInside(viewBounds))
            return;
        let itemBounds = item.bounds;
        if (position.x > viewBounds.width + 5) {
            position.x = -item.bounds.width;
        }

        if (position.x < -itemBounds.width - 5) {
            position.x = viewBounds.width;
        }

        if (position.y > viewBounds.height + 5) {
            position.y = -itemBounds.height;
        }

        if (position.y < -itemBounds.height - 5) {
            position.y = viewBounds.height
        }
    }

    return function (vector) {
        // Run through the active layer's children list and change
        // the position of the placed symbols:
        let layer = project.activeLayer;
        for (let i = 0; i < count; i++) {
            let item = layer.children[i];
            let size = item.bounds.size;
            let length = vector.length / 10 * size.width / 10;
            item.position += vector.normalize(length) + item.data.vector;
            keepInView(item);
        }
    };
};

export default MediaElement;
// let moveRainbow = new function () {
//     let paths = [];
//     let colors = ['red', 'orange', 'yellow', 'lime', 'blue', 'purple'];
//     for (let i = 0; i < colors.length; i++) {
//         let path = new Path({
//             fillColor: colors[i]
//         });
//         paths.push(path);
//     }

//     let count = 30;
//     let group = new Group(paths);
//     let headGroup;
//     let eyePosition = new Point();
//     let eyeFollow = (Point.random() - 0.5);
//     let blinkTime = 200;
//     function createHead(vector, count) {
//         let eyeVector = (eyePosition - eyeFollow);
//         eyePosition -= eyeVector / 4;
//         if (eyeVector.length < 0.00001)
//             eyeFollow = (Point.random() - 0.5);
//         if (headGroup)
//             headGroup.remove();
//         let top = paths[0].lastSegment.point;
//         let bottom = paths[paths.length - 1].firstSegment.point;
//         let radius = (bottom - top).length / 2;
//         let circle = new Path.Circle({
//             center: top + (bottom - top) / 2,
//             radius: radius,
//             fillColor: 'black'
//         });
//         circle.scale(vector.length / 100, 1);
//         circle.rotate(vector.angle, circle.center);

//         innerCircle = circle.clone();
//         innerCircle.scale(0.5);
//         innerCircle.fillColor = (count % blinkTime < 3)
//             || (count % (blinkTime + 5) < 3) ? 'black' : 'white';
//         if (count % (blinkTime + 40) == 0)
//             blinkTime = Math.round(Math.random() * 40) + 200;
//         let eye = circle.clone();
//         eye.position += eyePosition * radius;
//         eye.scale(0.15, innerCircle.position);
//         eye.fillColor = 'black';
//         headGroup = new Group(circle, innerCircle, eye);
//     }

//     return function (vector, event) {
//         let vector = (view.center - position) / 10;

//         if (vector.length < 5)
//             vector.length = 5;
//         count += vector.length / 100;
//         group.translate(vector);
//         let rotated = vector.rotate(90);
//         let middle = paths.length / 2;
//         for (let j = 0; j < paths.length; j++) {
//             let path = paths[j];
//             let nyanSwing = playing ? Math.sin(event.count / 2) * vector.length : 1;
//             let unitLength = vector.length * (2 + Math.sin(event.count / 10)) / 2;
//             let length = (j - middle) * unitLength + nyanSwing;
//             let top = view.center + rotated.normalize(length);
//             let bottom = view.center + rotated.normalize(length + unitLength);
//             path.add(top);
//             path.insert(0, bottom);
//             if (path.segments.length > 200) {
//                 let index = Math.round(path.segments.length / 2);
//                 path.segments[index].remove();
//                 path.segments[index - 1].remove();
//             }
//             path.smooth();
//         }
//         createHead(vector, event.count);
//         if (mediaElement)
//             mediaElement.setVolume(vector.length / 200);
//     }
// }