+++
title = 'Python'
date = 2023-09-07T12:48:04+02:00
menuTitle = "Python"
weight = 4
bookCollapseSection = false
bookHidden = false
draft = false
categories = ["taxonomy", "content"]
tags = "tutorial"
+++

### Type Hints
- https://ess-dmsc-dram.github.io/dmsc-school/1-python/python_basics/intermediate_topics.html#type-hints

### Slicing
```
l = list(range(8))  # NOT a numpy array
print(l)  # the full list
print(l[4])  # fifth item in the list
print(l[-2])  # second item from the back of the list
print(l[:2])  # range -> first two items
print(l[3:5])  # range -> items 3 to 5 (exclusive)
print(l[1:7:2])  # range -> items 1 to 7 (exclusive), with stride 2 ("every other")
```

### Numpy Array Order

- https://numpy.org/doc/stable/reference/generated/numpy.zeros.html

Sorry this looks messy! Probably never going to fix it!

```
numpy.zeros(shape, dtype=float, order='C', *, like=None)

Return a new array of given shape and type, filled with zeros.
Parameters:
	shape int or tuple of ints
		Shape of the new array, e.g., (2, 3) or 2.
	dtype data-type, optional
		The desired data-type for the array, e.g., numpy.int8. Default is numpy.float64.
	order {‘C’, ‘F’}, optional, default: ‘C’
		Whether to store multi-dimensional data in row-major (C-style) or column-major (Fortran-style) order in memory.
	like array_like, optional
		Reference object to allow the creation of arrays which are not NumPy arrays. If an array-like passed in as like supports the __array_function__ protocol, the result will be defined by it. In this case, it ensures the creation of an array object compatible with that passed in via this argument.
```

### Decorators
```
def mydecorator(func):
    def wrapper(*args, **kwargs):
        # Do something before calling the function
        print(
            f"Your function {func.__name__} is about to be called with arguments {args} and {kwargs}"
        )
        # Call the function
        result = func(*args, **kwargs)
        # Do something after calling the function
        print(f"Your function {func.__name__} was called")
        return result

    return wrapper


@mydecorator
def myfunction():
    print("Hello world")


@mydecorator
def myfunction2(x):
    print(f"Hello {x}")


myfunction()
myfunction2("John")
```