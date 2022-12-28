# Front-end Coding Assignment – DLS team

# Description 
• Build a production ready sign-up form page.
• The form should allow users to enter first name, last name, email, and password. 
• All fields are required and validated. 
• Password validation: 
• Should be a minimum of 8 characters,
• Should contain lower and uppercase letters
• Should not contain user’s first or last name.
• The valid form should send two sequential requests:
• POST form data to https://demo-api.now.sh/users
• Wait	4	seconds
• GET from https://demo-api.now.sh/users

#How to do it
• Keep	it	simple and	readable.
• Make	use	of	modern	JavaScript syntax	(async/await	etc),	no	TypeScript,	ES6+
• Use the latest version of React and use React Hooks.
• Do	not use	any	state	management	libraries	(Redux,	MobX	etc)
• Apply	proper	component logic	and	behavior.
• UX/UI your choice with minimal effort.
• Implementation should take not more than 4 hours.
• Try to give an estimation on worked hours - total and parts (like logic, styling, boilerplate, 
tests etc).
• Share the link to your solution in GitHub or GitLab or Bitbucket.
• Deadline is end of the day before the interview. 

# How we review 
• Correctness – Is it production-ready application? Does the application do what was asked? If 
not, does the README explain why it is missing and/or different? 
• Code quality – keep it simple, consistent and readable, follow the best practices.
• Testing – Is your logic covered with unit/integration/e2e tests? 
• UX – Is the web interface understandable and pleasing to use? 
• Documentation – Is there a README covering how to build and run your project? 
• Technical choices – Are choices of libraries, architecture etc. appropriate for the task? 

# Journey Highlights
1. Created standard React Project and noticed that you could do a lot with hooks (also confusing)
2. Created a js file to handle the form submission but realised I could make a object with input attributes instead.
3. Standard HTML validation is great. RegEx is powerfull

# Time management in hours
React Boilerplate - 0.25
Form + Validation - 3
GET + POST method - 0.75
Styling - 0,5
Test - 0,5

# Sites that helped me out
- https://reactjs.org/docs/thinking-in-react.html
- https://regexr.com/

# Things I learned after doing this challenge
- Developing with a new language is exiting
- It was fun to code for 'yourself'
- React is fast and powerfull
- Any objects are not always bad...
- Lost time because I noticed I could do something more efficient
- Hooks are weird but nice.
- Front-end testing is hard when you're not familiar with it.
