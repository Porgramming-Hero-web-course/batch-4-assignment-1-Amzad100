{
    // Define a union type Circle and Rectangle, where each type has a unique shape property.
    // Create a function calculateShapeArea that uses type guards to calculate the area based
    // on the shape type.
    // Sample Input 1:
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // // Sample Output 1:
    // 78.54;
    // Sample Input 2:
    // const rectangleArea = calculateShapeArea({
    //   shape: "rectangle",
    //   width: 4,
    //   height: 6,
    // });
    // Sample Output 2:
    // 24;
    //

    type Shape = Circle | Rectangle;
    type Circle = { shape: "circle", radius: number };
    type Rectangle = { shape: "rectangle", width: number, height: number }

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        } else if (shape.shape === "rectangle") {
            return shape.height * shape.width;
        }
        else return 0;
    }


    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea.toFixed(2));

    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    // console.log(rectangleArea);

    //
}
