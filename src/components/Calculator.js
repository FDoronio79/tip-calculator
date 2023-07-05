import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { NewItemForm } from './NewItemForm';
import { Summary } from './Summary';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';


const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
