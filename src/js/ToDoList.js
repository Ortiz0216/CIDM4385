ReactDom.createElement(
                1. what HTML element do you want to make?)
                2. are there any attribut/properties you need to pass out so that i can configure this new element?
                3. what content shall i place into this element? OR
                4. children

            const ToDoList = (props) => {
                React.createElement('ul', {}, [
                        React.createElement('ul', {}, "first thing"),
                        React.createElement('ul', {}, "second thing")
                    ]
                );
            };