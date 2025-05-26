//HERENCIA

class Animal{
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("Emite un sonido generico")
    }
}


class Dog extends Animal{
    
    run(){
        console.log("El perro corre")
    }

    sound(){
        console.log("El pedro ladra")
    }
}

class Fish extends Animal{
    
    constructor(name,size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}

let myDog = new Dog("Enzo")
myDog.run()
myDog.sound()

let myFish = new Fish("fcoresFish",98)
myFish.swim()
myFish.sound()

//METODOS ESTATICOS
class MathOperations {
    static sum(a,b){
        return a+b
    }
}


console.log(MathOperations.sum(5,13))