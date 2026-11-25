# Lab 4.1 – Reflection

**1. How did you approach creating more flexible functions with parameters?**

I approached the functions from a math, quantitative angle. I looked at them as formulas: you have different variables that go in different places, and you're essentially building formulas around them. In terms of making them flexible, I learned that you can create different rules inside a function, and those rules are checked from top to bottom, which is how the Task 3 function was set up. That changed how I thought about it: based on the output you want, you can layer if/else statements to create different criteria.

**2. What challenges did you face while incorporating conditional logic in your functions?**

The main challenge was making sure everything was in the correct order. Again, I thought about it like math, from an if-then perspective: if this, yes; if this, no. Learning that JavaScript checks conditions from top to bottom was something that applied across all of the tasks. In the last task, I saw that the calculation is essentially a math formula, so you have to follow PEMDAS. The discount had to be subtracted inside the parentheses before the tax was applied.

**3. How does refactoring improve the readability and maintainability of your code?**

Refactoring lets you work from a template instead of starting from scratch. That was extremely helpful, and it makes it easy to add or take out variables, which improves maintainability and makes changes faster. I also made a mistake by having both `calculateTotalCost` functions, from Task 2 and Task 4, in my script.js file at the same time. I learned that JavaScript uses the last version of a function with the same name, so only the second one actually ran. That showed me why it's important to refactor the right way.
