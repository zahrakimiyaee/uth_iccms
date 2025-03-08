export const EXAMPLES = {
	Components: {
		title: "Components",
		description:
			"Components ara the building blocks of React applications. A component bla bla bla...",
		code: `function Welcome(){
        return <h1> Hello, World!</h1>;
        }`,
	},
	JSX: {
		title: "JSX",
		description:
			"JSX is a syntax extension to javaScript. It is similar to a template bla bla bla...",
		code: `<div>
            <h1>Wilcome {userName}</h1>
            <p>Time to learn React!</p>
        </div>`,
	},
	Props: {
		title: "Props",
		description:
			"Components accept arbitarary inputs called props. They are like function bla bla bla...",
		code: `
        function Welcome(props){
        return <h1>Hello, {props.name}</h2>
        }`,
	},
	State: {
		title: "State",
		description:
			"State allows React components to change their output over time in bla bla bla...",
		code: `
        function Counter(){
        const [isVisible,setIsVisible]=useState(false);
        }`,
	},
};
