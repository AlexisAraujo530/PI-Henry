import React from "react";
import Start from "../components/Start";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import Start1 from "../components/Styles/Start1.png"

configure({ adapter: new Adapter() });


describe("<Start />", () => {
    const start = shallow(<Start/>)
    
    it('Es componente de clase', () => {
        expect(isReact.classComponent(Start)).toBeTruthy();
    })
    
    it('Debería renderizar un "h1" con el texto " PI Food "', () => {
        expect(start.find("h1").at(0).text()).toEqual(" PI Food ");
    })

    it('Deberia renderizar un "Link" a /home.', () => {
        expect(start.find("Link").at(0).prop("to")).toEqual("/home");
    })

    it('Debería renderizar en un tag "img" la imagen provista en la carpeta "../components/Styles/Plato.png"', () => {
        expect(start.find("img").at(0).prop("src")).toEqual(Start1);
    })

    it('La imagen debería tener un atributo "alt" con el texto "Platito"', () => {
        expect(start.find("img").at(0).prop("alt")).toEqual("Platito");
    })
})