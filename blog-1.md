Blog Writing: The significance of union and intersection types in Typescript.

Union and Intersection types are two important topics in TypeScript, which help in working with different types of values ​​and custom types.

1. Union Type:
Using the Union type, we can specify any one of multiple types. It is expressed by the | symbol.
Using the Union type, we can allow a variable to be any one of multiple types.
This is useful when we have the possibility of having values ​​of different types in the same variable, such as strings or numbers or booleans.
Exmaple: 
{
    type StringOrBooleas = string | boolean;
    let value: StringOrNumberOrBooleas;
    value = "Hello"; // Right
    value = "42";    // Right, This is a string
    value = 42;      // Wrong, because this is not a string or not a boolean.
    value = true;    // Right
}

2. Intersection Type:
Using the Intersection type, we can create a new type by combining multiple types. It is expressed by the & symbol.
Using the Intersection type, we can combine the properties of two or more types.
When working with the Intersection type, all the properties of the types must be present.
This is useful when it is necessary to have properties of more than one type in a variable.
Example:
{
    type StName = { name: string };
    type StId = { id: number };
    type StNameStId = StName & StId;

    const student: StNameStId = {
    name: "amzad",
    id: 23,
    };
}


Difference:
Union Type accepts any one of the values ​​of different types, such as: string | number | boolean.

Intersection Type combines the properties of multiple types to create a new type, for example: { name: string } & { id: number }.


When we need a variable to be any one of multiple types, it is better to use Union Type. And when we need all the properties of multiple types, it is reasonable to use Intersection Type.