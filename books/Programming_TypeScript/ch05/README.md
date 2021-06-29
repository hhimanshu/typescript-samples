# Chapter 5. Classes and Interfaces
[Chess Game](https://www.typescriptlang.org/play?#code/MYGwhgzhAEDiYFsCm0DeBfAUJsAjCALgE5jAHSiQwAKAlksCqptK9AA5ED2BDvAJhy4RaBWlwB2ALmjVho8RJZtgkwkQCuZLkQAUytm060AbmF7QiSMP0kgAnhS4gdMgMLOdAGgOHoAM1oQJBkwADEgpB8-NhIJAGsZACUwBN8ASmYY1gIAC1oIADp2eTFJaABeaAkkAHdZUsVdQOCvS1T49N8sXwQuEyQAFS5dEpEy6QbxxXS0X0M8guLG8qqxhUlu3zx1UnJgVIBZfqGR9YmZOWnJdJlcLmdrJV9MHsxKKGgAaVoJAHNoEgAB68CT8Gj0RhzQwHCTHAbDUYrSZXDYSW7Qe6PVLQ7LBcj8AoEVJQqqLIrnRSFQmEElIMLcBBI67o+axJAEDRECTQGnEiSMQpxeLQAA80AATNAAGTS3lEumFFoocUSrZYAD0Goo4E+AEUNEgkDzgaDwbJIUxNdqPjAAEIFXJcdiAkHG810BhWzBanVUb4SWh-XLkU3uiFetDWv2fJIPEVhsERqEYH023U0MC1E1upMWyOpzAEezsFAeFxESrQADkdvAwHi1egAB8awB1fK8atFksocKRKvVgCCTdbtdHNbcE+rABFpwBRadhaewacACW7xdL0BSCSrAEYW5KjwBmI8AFiPAFYjwA2I8AdiPAA5sLapmjcaxVBJ1FoCDo+jZBwRCmOYKDKqEEStGyrDGGYFjCskHQZFG2CGHydIMlwTKUpIlzIrMWTZFYnLcl+wHtAkMiHOYuSFDszJokKHTQAAtNA5IsQk6TRJRrCQdAtF5Ax+BMRMSqRIUwC5GARAePwSBDgQugAAyzBxXHKtJsnyVwinKWp6RdMBWCGFgWBAA)

[Interface vs Types when extending](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgILIN4Chm+QcwHtCATACgA8AuZEAVwFsAjaAShoGcwpR8c8mcctVqMWUdsi48QfAL5YsoSLEQoAQsggVIIEhzSZ+uIqUqduvZAB9RzNhZl88yQcMe9J03lgVYwAJ4ADiio6AC8Ri6m7nbiXpayxq5C5nEOUonyioEhyOqakWHIAGRReDFp3rI26RIeSS5uVVkJTr6KAPSdyAA2EGCuNAXIkdjdLinkrFgTckA)

## Exercises
1. What are the differences between a class and an interface?

A class can contain properties, methods and implementations. An interface can define the properties and does not provide any implementations.
A class can be instantiated. An interface cannot be instantiated
A class exist in value and type namespace. An interface exists only in type namespace

2. When you mark a class’s constructor as private, that means you can’t instantiate or extend the class. What happens when you mark it as protected instead? Play around with this in your code editor, and see if you can figure it out.

When a class has private constrcutor, we cannot instantiate the class.
Whena a class has a protected constructor, another class extending it can call it using `super()`. We cannot instantiate the class with protected constructor, however, if a class subclassing the class with protected constructor has public constructor, we can instanstiate it.
[Playground Link](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAqBOYB2EzAC4EsD2SCM0A3gFDTQAO8mAbmOgKbTC4TrwCuG28AFAJREAvsWHFmKdNHQEAvNCT0A7nEQo0WXHn7Ex4KCuSoMOJACYipCvGwMM9ACZMWbTum78hI3ZBgJD6k1MAUQAPBiR7GHow+gjfVSMNMwsycVYOLl4BEjIyCHZyeizLYWE0yXRzOQVlPzVjXGCYuP4gA)

-- Did not attempt 3 & 4
