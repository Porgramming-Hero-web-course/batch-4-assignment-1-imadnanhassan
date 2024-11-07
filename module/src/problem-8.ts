{
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  interface Person {
    name: string;
    age: number;
    email: string;
    }
    
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
    }
    
    const person = {
        name: "Adnan Hassan",
        age: 26,
        email: "hell@adnanhassan.net"
    }
    
    console.log(validateKeys(person, ["name", "age", "email"])); 
}
