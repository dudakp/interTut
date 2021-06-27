---
module: intro
isLastInModule: true
---

## components

A building block of react apps. Our whole app is just composition of react components. Simply said component is
composition of react elements with some functionality. Basic example of component can be just a simple button. This
button will have provided label text and perform provided action when clicked.

Enough talking lets see how this component will look.

```javascript
import React from 'react';

export const AwesomeButton = (props) => <button onClick={props.onClick}> {props.label} </button>
```

In react you can create components by creating class or just simple function. In this tutorial we will use a functional
components (components declared as function) when possible.

Let's explain this snippet. First thing, we need to import React now we can write react goodies. our `<AwesomeButton/>`
is nothing special, as I said it will just have provided label and do something when we click on it. Using functional
components is really simple, we are just declaring function that is returning react elements. In this case the function
`AwesomeButton` takes one parameter called props. We are expecting that provided props object will have property label
and onClick.

### props

Just like component is defined as pure function props are this function parameters but compressed in one object. Props
are read-only what means you can't change (mutate) value of this object.  
All react components are considered as pure function. Pure function is defined as function that takes certain parameters
and returns some value based on these parameters. It doesn't try to change its parameters. Every pure function have to
return same result when provided same set of parameters.

### displaying our component
`label` will represent what text we want to be written in the button and `onClick` will be callback function called when
the button is clicked. We can declare components anywhere in our /src project folder but mostly I prefer to create one
component per file. (more on that later)
So let's create a new file called AwesomeButton in /src folder and paste snippet to inside. Great we have out first
component. But we don't see it we have to render it.  
In our App.jsx Inside return statement let's write `<AwesomeButton label='Eyyy' onClick={(e) => alert('Eyyy')} />`  
`label` and `onClick` are props for out `AwesomeButton`
Now we will see an ugly button in our app with a label Eyy and when we click on it alert will appear. I'm sure that you
can see the simplicity in this also, it allows us to create reusable components that cam be written once and used
multiple times across application. 
