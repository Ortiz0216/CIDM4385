const FormInput= (props) => {
    return React.createElement('div',{className: "form-group"}, 
    [
            React.createElement('label', 
            {
                for: "exampleInputEmail1"
            },
            "Email Address"),

            React.createElement('input', 
            {
                className:"form-control",
                type: "email",
                id: "exampleInputEmail",
                placeholder: "Enter Email"
            }, 
            props.itemtwo),
        ]
    );
}