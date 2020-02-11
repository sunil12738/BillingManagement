This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run the project  

### Development build
Install all dependencies using `npm install`<br/>
Run the project using `npm start`<br/>

### Production build
Install all dependencies using `npm install`<br/>
Run `npm run build`. This will generate the build folder<br/>
Serve the folder using a server<br/>

## Assumptions
- The project is build only in react (all the functionality is using local state)<br/>
- The date for the bills are only considered of January 2020 month only. So, adding dates in different months might/might not break functionality.<br/>
- By default, 7 bills are added

## Additional Libraries used
- Moment<br/>
- Recharts<br/>
- Reactstrap<br/>

## Future Improvements
- State Management like redux can be used instead of local state<br/>
- A lot of checks need to be put like description or amount etc can't be empty. Date needs to be valid format<br/>
- Calendar can be shown instead of normal input for dates
- UI needs to be improved
- Sorting functionality can also be given

**Note: The current production build for this project is deployed at `https://sunil12738.github.io/`.**
