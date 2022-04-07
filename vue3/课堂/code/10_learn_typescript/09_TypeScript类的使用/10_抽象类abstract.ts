// shape: Shape 传进来的 参数要满足 Shape，并且里面有一个getArea方法
function makeArea(shape: Shape) {
  return shape.getArea()
}


// class Shape {
//    getArea(): number
// }
// 抽象类不能被实例化 new Shape()
// 抽象类里面的方法必须被子类实现
// 抽象类里面的抽象方法可以可以没有实现体
abstract class Shape {
  abstract getArea(): number
}


class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number

  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle))
console.log(makeArea(circle))
// makeArea(new Shape())   如果不定义成抽象的，人家直接给我们这么传， getArea里面是没有实现体的
// class Shape {
  //    getArea(): number
  // }

// makeArea(123)
// makeArea("123")

