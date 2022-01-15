import "./Flex.css";
const react = require("react");


class Flex extends react.Component {

    render() {
        return (
            <section id="Boring"> 
            <div id="flex">
            <img id="lady" src={require('../images/lady.svg').default} alt="obrazek"/>
            <img id="man" src={require('../images/man.svg').default} alt="obrazek"/>
            <img id="man2" src={require('../images/man2.svg').default} alt="obrazek"/>
            </div>
            <div id="border"> </div>
            </section>
        )

    }
}

export default Flex;