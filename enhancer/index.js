import { compose } from 'redux';
import middlewareEnhancer from '../middleware';
import monitorReducerEnhancer from './monitorReducer';

const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

export default composedEnhancers;
