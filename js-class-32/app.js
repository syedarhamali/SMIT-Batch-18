class Car{
    constructor(model, color , carName , brand){
        this.model = model,
        this.color = color,
        this.carName = carName,
        this.brand = brand
    }
}


const car = new Car('1998' , 'red' , 'Mehran' , 'Suzuki')

console.log(car , 'bagheer prototype k')

Car.prototype.plateNumber = 'KEO-1199'

console.log(car , 'object from Car constructor with prototype')


for(let key in car){
    console.log(car[key]) // object ki values ayengi console me
}