// 多态是同一个行为具有多个不同表现形式或形态的能力。

// 多态就是同一个接口，使用不同的实例而执行不同操作
// 打印机 --》 彩色打印机 --》 打印效果:彩色
// 打印机 --》 黑白打印机 --》 打印效果:黑白


// 多态存在的三个必要条件
// 继承
// 重写
// 父类引用指向子类对象：Parent p = new Child();


// 多态的优点
// 1. 消除类型之间的耦合关系
// 2. 可替换性
// 3. 可扩充性
// 4. 接口性
// 5. 灵活性
// 6. 简化性



class Animal {
  action() {
    console.log("animal action")
  }
}

class Dog extends Animal {
  action() {
    console.log("dog running!!!")
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swimming")
  }
}

class Person extends Animal {

}

// animal: dog/fish
// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
  animals.forEach(animal => {
    animal.action()
  })
}

makeActions([new Dog(), new Fish(), new Person()])

// 调用后打印的是子类里面的方法
// 父类引用(类型)指向子类对象
const animal:Animal = new Dog()
animal.action()
