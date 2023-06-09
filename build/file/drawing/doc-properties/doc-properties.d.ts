import { IContext, IXmlableObject, XmlComponent } from "../../../file/xml-components";
export interface DocPropertiesOptions {
    readonly name: string;
    readonly description: string;
    readonly title: string;
}
export declare class DocProperties extends XmlComponent {
    constructor({ name, description, title }?: DocPropertiesOptions);
    prepForXml(context: IContext): IXmlableObject | undefined;
}
