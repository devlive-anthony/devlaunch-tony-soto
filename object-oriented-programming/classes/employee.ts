/*

Horizon Innovations, una destacada empresa enfocada en el bienestar de los empleados, 
está desarrollando un sistema de seguimiento de salarios que busca mantener registros 
precisos de las remuneraciones de los empleados, incluyendo actualizaciones y 
modificaciones salariales.

Para gestionar y manipular los datos salariales de manera eficiente, es útil encapsularlos 
en un sistema de clases. Este enfoque proporciona una estructura clara y organizada para 
manejar las operaciones relacionadas con los salarios, asegurando la modularidad y la 
mantenibilidad del código.

Para implementar esto, crearemos una clase Employee con una variable principal llamada _salary,
que servirá como la base para todos los cálculos de salario en el sistema.

Esta clase incluirá dos métodos clave: un "getter" para recuperar el salario actual y un "setter"
para modificarlo. Es importante que el "setter" valide que el nuevo valor del salario sea positivo,
ya que no se permiten salarios negativos.
 
Adicionalmente, se incluirá un método giveRaise para aumentar el salario en una cantidad específica.

*/

class Employee {
  constructor(
    public _firstName: string,
    public _lastName: string,
    private _salary: number
  ) {
    this._firstName = _firstName
    this._lastName = _lastName
    this._salary = _salary
  }

  set salary(salary: number) {
    if (salary > 0) {
      this._salary = salary
    }
  }

  get salary() {
    return this._salary
  }

  giveRaise(extra: number) {
    const newSalary = this._salary + extra
    this._salary = newSalary
    return newSalary
  }
}

const e1 = new Employee('Anthony', 'Soto', 18000)
console.log(e1.giveRaise(2000))