import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from "react";

import { ArticleBlockQuote, Props } from './ArticleBlockQuote';

let testProps: Props = {
    person: "Atticus Finch",
    personTitle: "Awesome lawyer",
    quote: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin, but you begin anyway and see it through no matter what."
}

let testPropsWithoutPersonTitle: Props = {
    person: testProps.person,    
    quote: testProps.quote
}

describe('<ArticleBlockQuote />', () => {
    it('renders personTitle prop', () => {
        var wrapper = shallow(<ArticleBlockQuote {...testProps} />);
        expect(wrapper.text()).to.contain(testProps.personTitle);
    });
    it('handles null personTitle prop', () => {
        var wrapper = shallow(<ArticleBlockQuote {...testPropsWithoutPersonTitle} />);
        expect(wrapper.text()).to.not.contain(testProps.personTitle);
    });
    it('renders quote prop', () => {
        var wrapper = shallow(<ArticleBlockQuote {...testProps} />);
        expect(wrapper.text()).to.contain(testProps.quote);
    });
    it('renders person prop', () => {
        var wrapper = shallow(<ArticleBlockQuote {...testProps} />);
        expect(wrapper.text()).to.contain(testProps.person);
    });
});