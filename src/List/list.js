import React from 'react';

// function ListItem({value}) {
//     return (
//         <li>
//             <span>{value}</span>
//         </li>
//     );
// }

class ListItem extends React.Component {
    static defaultProps = {
        text: '',
        checked: false
    };

    constructor() {
    }

    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
                <span>
                    {this.props.value}
                </span>
            </li>
        );
    }
}

class List extends React.Component {
    static defaultProps = {
        list: [],
        handleItemChange: ()=>{}
    };

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list.map(entry => (
                {
                    text: entry.text,
                    checked: entry.checked
                }
            ))
        };
    }

    onItemChange(entry) {
        const {list} = this.state;
        this.setState({
            list: list.map(prevEntry => ({
                text: entry.text,
                checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked
            }))
        });

        this.props.handleItemChange(entry);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((entry, index) => {
                            return (
                                <ListItem
                                    key={`list-${index}`}
                                    value={entry.text}
                                    checked={entry.checked}
                                    onChange={this.onItemChange.bind(this, entry)}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

// function List({list, title}) {
//     return(
//         <div>
//             <ListTitle title={title} />
//             <ul>
//                 {
//                     list.map((item, index)=>{
//                         return (
//                             <ListItem key={`list-${index}`} value={item.text} />
//                         );
//                     })
//                 }
//             </ul>
//         </div>
//     );
// }
