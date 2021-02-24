import Enzyme from 'enzyme';

//import Adapter from 'enzyme-adapter-react-16'; there is no yet version for react 17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


