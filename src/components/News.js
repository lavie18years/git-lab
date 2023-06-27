import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import { Navbar, NavItem, Icon } from 'react-materialize'
function News() {
  return (
    <div>
      <Collapsible accordion={false}>
        <CollapsibleItem header="The Movie"><Icon left></Icon>
          <p>Here you can see the film card, which consists of over 50 best movies from all over the world.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Nation"><Icon left></Icon>
          <ul>
            <li><strong>UK</strong> - Harry Potter</li>
            <li><strong>US</strong> - Advenger</li>
            <li><strong>Viet Nam</strong> - Chị Dậu</li>
          </ul>
        </CollapsibleItem>
        <CollapsibleItem header="Daliy News"><Icon left></Icon>
          <ul>
            <li><strong>Uzumaki Naruto</strong> - Hokage</li>
            <li><strong>Monkey D Luffy</strong> - kaizoku-ou</li>
            <li><strong>Songoku</strong> - Super Saiyan</li>
          </ul>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default News;