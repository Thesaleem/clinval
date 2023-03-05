declare module '*.png'
declare module '*.jpg'
declare module "\*.svg" {  
    import React = require("react");  
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;  
    export default ReactComponent;
}
