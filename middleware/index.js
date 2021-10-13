import { applyMiddleware } from 'redux';
import loggerMiddleware from './logger';
import thunkMiddleware from 'redux-thunk';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);

export default middlewareEnhancer;
