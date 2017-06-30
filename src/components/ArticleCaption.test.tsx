import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from "react";

import { ArticleCaption, Props } from './ArticleCaption';

describe('<ArticleCaption />', () => {
    it('renders props.children', () => {
        var wrapper = shallow(<ArticleCaption><p>test content</p></ArticleCaption>);
        expect(wrapper.text()).to.contain("test content");
    });
});