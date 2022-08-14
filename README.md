# DjangoCalculator
This is a basic calculator application consisting of one webpage with a calculator interface that can be used to do basic computations.
The calculator is designed with a basic HTML Table. There is javascript for some of the query building logic as the user pressed the buttons. The calculator then makes a POST request to another django endpoint that computes the result and returns it to the webpage.

## Getting Set Up
### 1. Install Python

https://www.python.org/downloads/

### 2. Install Django
```bash
$ python -m pip install Django
```
### 3. Download this repo

### 4. Run server

Go into the root folder of the django project 
```bash
$ cd DjangoCalculator/calculator
```
and then run
```bash
$ python .\manage.py runserver
```
### 5. Navigate to webpage

```http://localhost:8000/calculator```
