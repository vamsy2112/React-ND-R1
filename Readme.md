# The first lesson

- we did see what react.createElement is, how react injects the content in div with id=root
  configured git, ssh etc.

=============================

# The second lesson

- we saw what is package.json and package-lock.json,
- node modules, what is difference b/w ^ and ~
- then we initialised npm, saw npm, installed npm, installed parcel.

=============================

# The third

- we saw how we can create a component, a functional one.
- react functions are nothing but simple js functions.

=============================

# The fourth

- we created a swiggy homepage with our own mockData.
- We created comps like header, search, card container, card, app layout etc.
- we saw what are props and passed dynamic data to each of the restaurant cards

=============================

# The fifth

- cleaned up the code and studies about the states in react
- made a mockData and rendered the UI based on it, we call it the config driven data

==============================

# The sixth

- fixed img through cludinaryImageId on ech card from response
- Top rated res filter
- search with filter
- useState
- useEffect

===============================

# The seventh

- more about useEffect
- routing with react-router-domm -> createBrowserRouter, RouterProvider
- error element with react-router-dom -> useRouteError boundary
- children in route of createBrowserRouter
- Outlet -> this will replace my component dynamically
- Link -> Link should be there instead of anchor tag. it works as same but it will not refresh the
  entire page as anchor tag. It has to={} attribute
- Dynamic routing of restaurant when user clicks on the res card on homepage.
- concepts invloved : path: /restaurants/:resId
- useParams, useEffect full pledged
- wrapped each card into a Link from react-router-dom

# The eighth

- class components
- diff b/w class and func components
- constructor receives props, this creates an instance of comp
- super method is compulsory if constructor is defined because it calls the constructor of parent class, in this case, it is rect.compo
- super isn't compulsory if there is no constructor defined.
- omit the constructor if you dn need to bind the events, dn need to deal with a state.
- if no constructor, then state can be called as below:
- ////...extends react.comp
  state = {
  // state variables go here..
  }
- how to update a state?
- have to pass this.setState({}) function to onClick method, which accepts an obj.
- Inside this, we neeed to update the state.
- lifecycle methods:
- componentDidMount is used to make api calls. its written b/w constructor and render methods because it is called at last.
- componentDidUpdate is called after every render.
- componentWillUnmount will be called when we move to other page or other component.
- the prob with an SPA is if i write any setInterval in componentDidMount and move to some other comp, then also the setInterval will keep on calling as the page isnt getting refreshed. Instead, we just moving to some other comp.
- Hence, its a must that we should always clear the setInterval using this.timer as reference in class comp and const timer in func comp. This will make sure that the timer doesnt actually keep on running even if the comp changes, leading to performance improvement.
- In func components, we can actually do componentWillUnmount by returning a func inside useEffect.
