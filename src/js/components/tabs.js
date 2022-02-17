// Реализация табов
import GraphTabs from 'graph-tabs';

const tabs1 = new GraphTabs('tab', {
  isChanged: (tabs) => {
    console.log(tabs);
  }
});

const tabs2 = new GraphTabs('tab2', {
  isChanged: (tabs) => {
    console.log(tabs);
  }
});



