import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import {FilterableCatalogue} from './scripts/FilterableCatalogue';
import {PRODUCTS} from "./scripts/dataBase";

ReactDOM.render(<FilterableCatalogue products={PRODUCTS}/>, document.getElementById('container'));

