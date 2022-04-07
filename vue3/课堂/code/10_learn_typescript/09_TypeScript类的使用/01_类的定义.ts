class Person {
  // // 如果下面constructor没有 类型注解/any 要给默认值
  // name: string = ''
  // age: number = 123
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + " eating")
  }
}

const p = new Person("why", 18)
console.log(p.name)
console.log(p.age)
p.eating()

export {}
